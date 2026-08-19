"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitBooking(formData: any) {
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

    const htmlContent = `
      <h1>New Booking Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Placement:</strong> ${placement}</p>
      <p><strong>Appointment Type:</strong> ${appointmentType}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate || "Not specified"}</p>
      <p><strong>Preferred Time:</strong> ${preferredTime || "Not specified"}</p>
      <br/>
      <h2>Description/Idea:</h2>
      <p>${description}</p>
    `

    const { data, error } = await resend.emails.send({
      from: "Angel Tattooz Bookings <onboarding@resend.dev>", // Or your verified domain
      to: ["Ink@angeltattooz.co.uk"],
      replyTo: email,
      subject: `New Booking Request from ${name} - ${service}`,
      html: htmlContent,
    })

    if (error) {
      console.error("Resend Error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error: any) {
    console.error("Booking submission failed:", error)
    return { success: false, error: error.message || "Failed to submit booking." }
  }
}
