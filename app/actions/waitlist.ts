"use server";

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
      emails.map(async email => {
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

import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "../components/email-template";
import {
  addSubscriber,
  getAllSubscribers as getStoredSubscribers,
  getSubscriberCount,
} from "../lib/storage";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["customer", "provider"], {
    required_error: "Role is required",
  }),
});

export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const role = formData.get("role");

    if (!name || !email || !role) {
      return { success: false, message: "All fields are required" };
    }

    const result = schema.safeParse({ name, email, role });

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message };
    }

    const subscriber = {
      name: name.toString(),
      email: email.toString(),
      role: role.toString() as "customer" | "provider",
      joinedAt: new Date().toISOString(),
    };

    const added = await addSubscriber(subscriber);

    if (!added) {
      return {
        success: false,
        message: "This email is already on the waitlist",
      };
    }

    // Send welcome email using Resend (optional - only if API key is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
          from: "Steerify <onboarding@resend.dev>",
          to: email.toString(),
          subject: "Welcome to Steerify Waitlist!",
          html: EmailTemplate({ email: email.toString() }),
        });

        if (error) {
          console.error("Error sending email:", error);
          // Don't fail the entire operation if email fails
        }
      } catch (emailError) {
        console.error("Email service error:", emailError);
        // Continue without failing the waitlist signup
      }
    } else {
      console.log("Resend API key not configured - skipping email");
    }

    const count = await getWaitlistCount();

    return {
      success: true,
      message:
        "You have been added to the waitlist! We'll notify you when we launch.",
      count,
    };
  } catch (error) {
    console.error("Error:", error);
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
