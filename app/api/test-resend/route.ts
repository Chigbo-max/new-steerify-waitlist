// app/api/test-resend/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        success: false, 
        error: 'RESEND_API_KEY not found in environment variables' 
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'Steerify <onboarding@resend.dev>',
      to: 'test@example.com', // Change to your email for testing
      subject: 'Test Email from Resend',
      html: '<p>This is a test email to verify Resend is working!</p>',
    });

    if (error) {
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully',
      data 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}