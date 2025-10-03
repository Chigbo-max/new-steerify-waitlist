import express from 'express';
import { z } from 'zod';
import { Resend } from 'resend';
import { EmailTemplate } from '../components/email-template';
import {
  addSubscriber,
  deleteSubscriber,
  getAllSubscribers as getStoredSubscribers,
  getSubscriberCount,
} from '../lib/storage';
import { Subscriber, ApiResponse, BulkEmailRequest } from '../models/subscriber';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['customer', 'provider'], {
    required_error: 'Role is required',
  }),
});

// POST /api/waitlist/join - Join waitlist
router.post('/join', async (req, res) => {
  try {
    const { name, email, role } = req.body;

    if (!name || !email || !role) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    const result = schema.safeParse({ name, email, role });

    if (!result.success) {
      return res.status(400).json({ 
        success: false, 
        message: result.error.errors[0].message 
      });
    }

    const subscriber = {
      name: name,
      email: email,
      role: role as 'customer' | 'provider',
      joinedAt: new Date().toISOString(),
    };

    const added = await addSubscriber(subscriber);

    if (!added) {
      return res.status(409).json({
        success: false,
        message: 'This email is already on the waitlist',
      });
    }

    // Send welcome email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const { data, error } = await resend.emails.send({
          from: 'Steerify <onboarding@resend.dev>',
          to: email,
          subject: 'Welcome to Steerify Waitlist! 🎉',
          react: EmailTemplate({ email, name }),
        });

        if (error) {
          console.error('Resend error details:', {
            message: error.message,
            name: error.name,
          });
          return res.status(500).json({
            success: false,
            message: `Email failed: ${error.message}`,
          });
        } else {
          console.log('✅ Email sent successfully to:', email);
        }
      } catch (emailError) {
        console.error('❌ Email service error:', emailError);
        return res.status(500).json({
          success: false,
          message: `Email service error: ${emailError instanceof Error ? emailError.message : 'Unknown error'}`,
        });
      }
    } else {
      console.error('❌ RESEND_API_KEY missing');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured',
      });
    }

    const count = await getSubscriberCount();

    res.json({
      success: true,
      message: 'You have been added to the waitlist! Check your email for confirmation.',
      count,
    });
  } catch (error) {
    console.error('Error joining waitlist:', error);
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    });
  }
});

// GET /api/waitlist/count - Get waitlist count
router.get('/count', async (req, res) => {
  try {
    const count = await getSubscriberCount();
    res.json({ count });
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    res.json({ count: 0 });
  }
});

// GET /api/waitlist/subscribers - Get all subscribers (admin only)
router.get('/subscribers', async (req, res) => {
  try {
    console.log('[API] Fetching all subscribers from storage');
    const subscribers = await getStoredSubscribers();
    console.log('[API] Successfully fetched subscribers:', subscribers.length);
    res.json({ subscribers });
  } catch (error) {
    console.error('[API] Error fetching subscribers:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching subscribers',
      subscribers: [] 
    });
  }
});

// DELETE /api/waitlist/subscriber/:email - Delete subscriber
router.delete('/subscriber/:email', async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }

    const deleted = await deleteSubscriber(email);
    
    if (!deleted) {
      return res.status(404).json({ 
        success: false, 
        message: 'Subscriber not found' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Subscriber deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while deleting subscriber.',
    });
  }
});

// POST /api/waitlist/bulk-email - Send bulk email (admin only)
router.post('/bulk-email', async (req, res) => {
  const { subject, body, emails } = req.body;

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ 
      success: false, 
      message: 'Resend API key not configured.' 
    });
  }
  
  if (!subject || !body || !emails || emails.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Subject, body, and at least one recipient are required.',
    });
  }
  
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Send emails in parallel (could be throttled if needed)
    const results = await Promise.all(
      emails.map(async (email: string) => {
        const { error } = await resend.emails.send({
          from: 'Steerify <onboarding@resend.dev>',
          to: email,
          subject,
          html: `<div style='font-family:sans-serif;line-height:1.5;'>${body.replace(/\n/g, '<br/>')}</div>`,
        });
        return { email, error };
      })
    );
    
    const failed = results.filter(r => r.error);
    if (failed.length > 0) {
      return res.status(500).json({
        success: false,
        message: `Failed to send to: ${failed.map(f => f.email).join(', ')}`,
      });
    }
    
    res.json({
      success: true,
      message: `Sent to ${emails.length} subscriber(s).`,
    });
  } catch (err) {
    console.error('[API] Bulk email error:', err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while sending emails.',
    });
  }
});

export default router;