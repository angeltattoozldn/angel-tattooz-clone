"use server"

import { Resend } from "resend"

export interface BookingSubmissionData {
  name: string
  email: string
  phone: string
  service: string
  placement: string
  appointmentType: string
  preferredDate?: string
  preferredTime?: string
  description: string
}

export interface BookingResult {
  success: boolean
  error?: string
  isDepositRequired?: boolean
  depositUrl?: string
  customerName?: string
  appointmentType?: string
}

export async function submitBooking(formData: BookingSubmissionData): Promise<BookingResult> {
  try {
    const {
      name,
      email,
      phone,
      service,
      placement,
      appointmentType,
      preferredDate,
      preferredTime,
      description,
    } = formData

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !description?.trim()) {
      return { success: false, error: "Please complete all required fields." }
    }

    const isDepositRequired = appointmentType === "tattoo"

    console.log("==========================================")
    console.log(`[NEW BOOKING REQUEST] - ${new Date().toISOString()}`)
    console.log(`Customer: ${name} (${email}, ${phone})`)
    console.log(`Service: ${service} | Placement: ${placement}`)
    console.log(`Type: ${appointmentType} (Deposit Required: ${isDepositRequired ? "YES - £50" : "NO - Consultation"})`)
    console.log(`Date/Time: ${preferredDate || "Flexible"} at ${preferredTime || "Flexible"}`)
    console.log(`Description: ${description}`)
    console.log("==========================================")

    // Attempt email delivery via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const htmlContent = `
          <h2>New ${isDepositRequired ? "Tattoo Session Booking" : "Consultation Request"}</h2>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service / Style:</strong> ${service}</p>
          <p><strong>Placement:</strong> ${placement}</p>
          <p><strong>Appointment Type:</strong> ${appointmentType === "tattoo" ? "Tattoo Session (£50 Deposit to Confirm)" : "Tattoo Consultation"}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate || "Flexible"}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime || "Flexible"}</p>
          <br/>
          <h3>Tattoo Concept / Description:</h3>
          <p style="white-space: pre-wrap;">${description}</p>
          <br/>
          <hr/>
          <p><small>Angel Tattooz • Studio A, 15 Station Parade, Cockfosters EN4 0DL</small></p>
        `

        await resend.emails.send({
          from: "Angel Tattooz Bookings <onboarding@resend.dev>",
          to: ["Ink@angeltattooz.co.uk"],
          replyTo: email,
          subject: `${isDepositRequired ? "🚨 New Tattoo Booking" : "💬 New Consultation"}: ${name} - ${service}`,
          html: htmlContent,
        })
      } catch (emailErr) {
        console.warn("Resend email notification failed/restricted (logged to console):", emailErr)
      }
    }

    return {
      success: true,
      isDepositRequired,
      depositUrl: isDepositRequired ? "https://buy.stripe.com/9AQ4je1EQ3ff7T24gh" : undefined,
      customerName: name,
      appointmentType,
    }
  } catch (error: any) {
    console.error("Booking submission error:", error)
    return {
      success: false,
      error: error.message || "Something went wrong. Please contact us on WhatsApp.",
    }
  }
}
