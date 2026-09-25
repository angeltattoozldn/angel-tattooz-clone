"use server"

import { Resend } from "resend"

export async function submitNewsletter(formData: FormData | { email: string }) {
  try {
    const email = typeof formData === "object" && "get" in formData 
      ? (formData.get("email") as string) 
      : (formData as { email: string }).email

    if (!email || !email.includes("@")) {
      return { success: false, error: "Please enter a valid email address." }
    }

    console.log(`[NEWSLETTER SUBSCRIPTION] New subscriber: ${email.trim()} at ${new Date().toISOString()}`)

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: "Angel Tattooz <onboarding@resend.dev>",
          to: ["Ink@angeltattooz.co.uk"],
          subject: `New Newsletter Subscriber: ${email.trim()}`,
          html: `
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${email.trim()}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString("en-GB")}</p>
          `,
        })
      } catch (emailErr) {
        console.warn("Newsletter admin notification email skipped:", emailErr)
      }
    }

    return { success: true }
  } catch (error: any) {
    console.error("Newsletter submission error:", error)
    return { success: false, error: error.message || "Failed to subscribe." }
  }
}
