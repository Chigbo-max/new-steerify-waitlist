"use server"

import { z } from "zod"
import { Resend } from "resend"
import { EmailTemplate } from "../components/email-template"
import { addSubscriber, getAllSubscribers as getStoredSubscribers, getSubscriberCount } from "../lib/storage"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["customer", "provider"], { required_error: "Role is required" }),
})

export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const name = formData.get("name")
    const email = formData.get("email")
    const role = formData.get("role")

    if (!name || !email || !role) {
      return { success: false, message: "All fields are required" }
    }

    const result = schema.safeParse({ name, email, role })

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message }
    }

    const subscriber = {
      name: name.toString(),
      email: email.toString(),
      role: role.toString() as "customer" | "provider",
      joinedAt: new Date().toISOString(),
    }

    const added = await addSubscriber(subscriber)

    if (!added) {
      return { success: false, message: "This email is already on the waitlist" }
    }

    // Send welcome email using Resend
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email.toString(),
      subject: "Welcome to Our Waitlist!",
      html: EmailTemplate({ email: email.toString() }),
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, message: "Failed to join waitlist. Please try again." }
    }

    const count = await getWaitlistCount()

    return {
      success: true,
      message: "You have been added to the waitlist! Check your email for confirmation.",
      count,
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function getWaitlistCount() {
  try {
    return await getSubscriberCount()
  } catch (error) {
    return 0
  }
}

export async function getAllSubscribers() {
  try {
    console.log("[v0] Fetching all subscribers from file storage")
    const subscribers = await getStoredSubscribers()
    console.log("[v0] Successfully fetched subscribers:", subscribers.length)
    return subscribers
  } catch (error) {
    console.error("[v0] Error fetching subscribers:", error)
    return []
  }
}
