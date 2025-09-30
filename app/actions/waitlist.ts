"use server";

import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "../components/email-template";
import {
  addSubscriber,
  deleteSubscriber,
  getAllSubscribers as getStoredSubscribers,
  getSubscriberCount,
} from "../lib/storage";

// Validation schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["customer", "provider"], {
    required_error: "Role is required",
  }),
});

export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;

    if (!name || !email || !role) {
      return { success: false, message: "All fields are required" };
    }

    const result = schema.safeParse({ name, email, role });

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message };
    }

    const subscriber = {
      name: name,
      email: email,
      role: role as "customer" | "provider",
      joinedAt: new Date().toISOString(),
    };

    const added = await addSubscriber(subscriber);

    if (!added) {
      return {
        success: false,
        message: "This email is already on the waitlist",
      };
    }

    // Send welcome email using Resend
    if (process.env.RESEND_API_KEY) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: "Steerify <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Steerify Waitlist! 🎉",
      react: EmailTemplate({ email, name }),
    });

    if (error) {
      console.error("Resend error details:", {
        message: error.message,
        name: error.name,
      });
      // Return error for debugging
      return {
        success: false,
        message: `Email failed: ${error.message}`,
      };
    } else {
      console.log("✅ Email sent successfully to:", email);
    }
  } catch (emailError) {
    console.error("❌ Email service error:", emailError);
    return {
      success: false,
      message: `Email service error: ${emailError instanceof Error ? emailError.message : 'Unknown error'}`,
    };
  }
} else {
  console.error("❌ RESEND_API_KEY missing");
  return {
    success: false,
    message: "Email service not configured",
  };
}

    const count = await getWaitlistCount();

    return {
      success: true,
      message: "You have been added to the waitlist! Check your email for confirmation.",
      count,
    };
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

export async function getWaitlistCount() {
  try {
    return await getSubscriberCount();
  } catch (error) {
    return 0;
  }
}

export async function getAllSubscribers() {
  try {
    console.log("[v0] Fetching all subscribers from file storage");
    const subscribers = await getStoredSubscribers();
    console.log("[v0] Successfully fetched subscribers:", subscribers.length);
    return subscribers;
  } catch (error) {
    console.error("[v0] Error fetching subscribers:", error);
    return [];
  }
}

export async function deleteSubscriberAction(email: string) {
  try {
    if (!email) {
      return { success: false, message: "Email is required" };
    }

    const deleted = await deleteSubscriber(email);
    
    if (!deleted) {
      return { success: false, message: "Subscriber not found" };
    }

    return { 
      success: true, 
      message: "Subscriber deleted successfully" 
    };
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    return {
      success: false,
      message: "An unexpected error occurred while deleting subscriber.",
    };
  }
}

// Bulk email action for admin
export async function sendBulkEmail({
  subject,
  body,
  emails,
}: {
  subject: string;
  body: string;
  emails: string[];
}) {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, message: "Resend API key not configured." };
  }
  
  if (!subject || !body || !emails || emails.length === 0) {
    return {
      success: false,
      message: "Subject, body, and at least one recipient are required.",
    };
  }
  
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Send emails in parallel (could be throttled if needed)
    const results = await Promise.all(
      emails.map(async (email) => {
        const { error } = await resend.emails.send({
          from: "Steerify <onboarding@resend.dev>",
          to: email,
          subject,
          html: `<div style='font-family:sans-serif;line-height:1.5;'>${body.replace(/\n/g, "<br/>")}</div>`,
        });
        return { email, error };
      })
    );
    
    const failed = results.filter(r => r.error);
    if (failed.length > 0) {
      return {
        success: false,
        message: `Failed to send to: ${failed.map(f => f.email).join(", ")}`,
      };
    }
    
    return {
      success: true,
      message: `Sent to ${emails.length} subscriber(s).`,
    };
  } catch (err) {
    console.error("[admin] Bulk email error:", err);
    return {
      success: false,
      message: "An error occurred while sending emails.",
    };
  }



}