"use server"

import { Resend } from "resend"
import { createClient } from "next-sanity"
import { BUSINESS_CONFIG } from "@/config/business.config"

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
  whatsappFallbackUrl?: string
  isDepositRequired?: boolean
  depositUrl?: string
  customerName?: string
  appointmentType?: string
}

export async function submitBooking(formData: FormData | BookingSubmissionData): Promise<BookingResult> {
  try {
    let name: string
    let email: string
    let phone: string
    let service: string
    let placement: string
    let appointmentType: string
    let preferredDate: string | undefined
    let preferredTime: string | undefined
    let description: string
    let files: File[] = []

    if (typeof formData === "object" && "get" in formData) {
      name = (formData.get("name") as string) || ""
      email = (formData.get("email") as string) || ""
      phone = (formData.get("phone") as string) || ""
      service = (formData.get("service") as string) || ""
      placement = (formData.get("placement") as string) || ""
      appointmentType = (formData.get("appointmentType") as string) || "consultation"
      preferredDate = (formData.get("preferredDate") as string) || undefined
      preferredTime = (formData.get("preferredTime") as string) || undefined
      description = (formData.get("description") as string) || ""
      files = (formData.getAll("images") as File[]).filter((f) => f && f.size > 0)
    } else {
      name = formData.name || ""
      email = formData.email || ""
      phone = formData.phone || ""
      service = formData.service || ""
      placement = formData.placement || ""
      appointmentType = formData.appointmentType || "consultation"
      preferredDate = formData.preferredDate
      preferredTime = formData.preferredTime
      description = formData.description || ""
    }

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !description?.trim()) {
      return { success: false, error: "Please complete all required fields (Name, Email, Phone, Idea)." }
    }

    const isDepositRequired = appointmentType === "tattoo"

    console.log("==========================================")
    console.log(`[NEW BOOKING REQUEST] - ${new Date().toISOString()}`)
    console.log(`Customer: ${name} (${email}, ${phone})`)
    console.log(`Service: ${service} | Placement: ${placement}`)
    console.log(`Type: ${appointmentType} (Deposit Required: ${isDepositRequired ? "YES - £50" : "NO - Consultation"})`)
    console.log(`Date/Time: ${preferredDate || "Flexible"} at ${preferredTime || "Flexible"}`)
    console.log(`Description: ${description}`)
    console.log(`Reference Files Attached: ${files.length}`)
    console.log("==========================================")

    // Process file attachments and upload to Sanity CDN
    const attachments: { filename: string; content: Buffer }[] = []
    const uploadedAssetUrls: string[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      try {
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const filename = file.name || `reference-image-${i + 1}.jpg`

        attachments.push({
          filename,
          content: buffer,
        })

        if (process.env.SANITY_API_WRITE_TOKEN) {
          const client = createClient({
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "e1ur0uih",
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
            apiVersion: "2024-08-01",
            token: process.env.SANITY_API_WRITE_TOKEN,
            useCdn: false,
          })
          const asset = await client.assets.upload("image", buffer, {
            filename,
          })
          if (asset?.url) {
            uploadedAssetUrls.push(asset.url)
          }
        }
      } catch (fileErr) {
        console.warn(`[IMAGE PROCESS WARNING] File ${file.name || i} upload failed:`, fileErr)
      }
    }

    const buildWhatsAppFallback = (clientName: string, clientPlacement: string) => {
      const whatsappNumber = (process.env.WHATSAPP_NUMBER || BUSINESS_CONFIG.contact.whatsapp).replace("+", "")
      const text = encodeURIComponent(
        `Hi Angel Tattooz, my name is ${clientName}. I would like to book a tattoo on my ${clientPlacement || "placement"}.`
      )
      return `https://wa.me/${whatsappNumber}?text=${text}`
    }

    // Attempt email delivery via Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("[RESEND CRITICAL] RESEND_API_KEY environment variable is not set! Booking emails cannot be sent.")
      return {
        success: false,
        error: "Booking notification failed to dispatch. Please contact the studio directly via WhatsApp.",
        whatsappFallbackUrl: buildWhatsAppFallback(name, placement),
      }
    }

    let emailDelivered = false
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)

      const recipientEmail = process.env.BOOKING_NOTIFICATION_EMAIL || "ink@angeltattooz.co.uk"
      const fromEmail = process.env.RESEND_FROM_EMAIL || "Angel Tattooz <bookings@angeltattooz.co.uk>"

      const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222; line-height: 1.6;">
            <div style="background: #121212; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: #FAD5E6; margin: 0; font-size: 24px;">Angel Tattooz</h1>
              <p style="color: #D4C59D; margin: 6px 0 0 0; font-size: 14px; letter-spacing: 1px; text-transform: uppercase;">
                ${isDepositRequired ? "🚨 New Tattoo Session Booking" : "💬 New Consultation Request"}
              </p>
            </div>

            <div style="background: #ffffff; padding: 24px; border: 1px solid #eaeaea; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="margin-top: 0; color: #111; border-bottom: 2px solid #D4C59D; padding-bottom: 8px;">Customer Information</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; width: 140px;"><strong>Customer Name:</strong></td>
                  <td style="padding: 6px 0; color: #111; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666;"><strong>Email:</strong></td>
                  <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #c2a278; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666;"><strong>Phone / WhatsApp:</strong></td>
                  <td style="padding: 6px 0;"><a href="tel:${phone}" style="color: #111; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666;"><strong>Service / Style:</strong></td>
                  <td style="padding: 6px 0; color: #111;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666;"><strong>Placement:</strong></td>
                  <td style="padding: 6px 0; color: #111;">${placement}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666;"><strong>Type:</strong></td>
                  <td style="padding: 6px 0; color: ${isDepositRequired ? "#d97706" : "#2563eb"}; font-weight: bold;">
                    ${isDepositRequired ? "Tattoo Session (£50 Deposit to Confirm)" : "Consultation"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666;"><strong>Preferred Date:</strong></td>
                  <td style="padding: 6px 0; color: #111;">${preferredDate || "Flexible"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666;"><strong>Preferred Time:</strong></td>
                  <td style="padding: 6px 0; color: #111;">${preferredTime || "Flexible"}</td>
                </tr>
              </table>

              <h2 style="color: #111; border-bottom: 2px solid #D4C59D; padding-bottom: 8px;">Tattoo Concept / Description</h2>
              <div style="background: #f9f9f9; padding: 16px; border-radius: 6px; border-left: 4px solid #D4C59D; margin-bottom: 24px; white-space: pre-wrap; font-size: 15px;">${description}</div>

              ${uploadedAssetUrls.length > 0 ? `
                <h2 style="color: #111; border-bottom: 2px solid #D4C59D; padding-bottom: 8px;">Reference Images (${uploadedAssetUrls.length})</h2>
                <div style="margin: 16px 0;">
                  ${uploadedAssetUrls.map((url, idx) => `
                    <div style="margin-bottom: 20px;">
                      <p style="margin: 0 0 6px 0; font-size: 13px;">
                        <strong>Reference #${idx + 1}:</strong> 
                        <a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #c2a278; font-weight: bold; margin-left: 8px;">View High-Res Original ↗</a>
                      </p>
                      <a href="${url}" target="_blank" rel="noopener noreferrer">
                        <img src="${url}?w=600&auto=format" alt="Reference Image ${idx + 1}" style="max-width: 100%; max-height: 350px; border-radius: 6px; border: 1px solid #ddd; display: block;" />
                      </a>
                    </div>
                  `).join("")}
                </div>
              ` : attachments.length > 0 ? `
                <p style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 12px; border-radius: 6px;">
                  📎 <strong>${attachments.length} reference file(s)</strong> attached directly to this email.
                </p>
              ` : `
                <p style="color: #888; font-style: italic;">No reference images attached with this submission.</p>
              `}

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
                <p>Reply directly to this email to contact <strong>${name}</strong> at <strong>${email}</strong>.</p>
                <p>Studio A, 15 Station Parade, Cockfosters, London EN4 0DL</p>
              </div>
            </div>
          </div>
        `

      const sendResult = await resend.emails.send({
        from: fromEmail,
        to: [recipientEmail],
        bcc: ["angeltattoozldn@gmail.com"],
        replyTo: email,
        subject: `${isDepositRequired ? "🚨 New Tattoo Booking" : "💬 New Consultation"}: ${name} - ${service}`,
        html: htmlContent,
        attachments: attachments.length > 0 ? attachments : undefined,
      })

      if (sendResult.error) {
        console.error("[RESEND ERROR] Studio notification FAILED:", JSON.stringify(sendResult.error))
        return {
          success: false,
          error: "Booking notification failed to dispatch. Please contact the studio directly via WhatsApp.",
          whatsappFallbackUrl: buildWhatsAppFallback(name, placement),
        }
      }

      emailDelivered = true
      console.log(`[RESEND SUCCESS] Studio notification delivered to ${recipientEmail} (ID: ${sendResult.data?.id})`)

      // Automated Customer Confirmation Email
      try {
        const whatsappNumber = (process.env.WHATSAPP_NUMBER || BUSINESS_CONFIG.contact.whatsapp).replace("+", "")
        await resend.emails.send({
          from: fromEmail,
          to: [email],
          subject: `We've received your ${isDepositRequired ? "tattoo booking request" : "consultation enquiry"} | Angel Tattooz`,
          html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; color: #222; line-height: 1.6;">
                <div style="background: #121212; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
                  <h1 style="color: #FAD5E6; margin: 0; font-size: 24px;">Angel Tattooz</h1>
                  <p style="color: #D4C59D; margin: 6px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Cockfosters, North London</p>
                </div>
                <div style="background: #ffffff; padding: 24px; border: 1px solid #eaeaea; border-top: none; border-radius: 0 0 8px 8px;">
                  <h2 style="color: #111; margin-top: 0;">Hi ${name},</h2>
                  <p>Thank you for reaching out to Angel Tattooz! We have received your ${isDepositRequired ? "tattoo session booking details" : "consultation request"}.</p>
                  
                  <div style="background: #fafafa; border: 1px solid #eee; border-radius: 6px; padding: 16px; margin: 20px 0;">
                    <p style="margin: 0 0 8px 0;"><strong>Service:</strong> ${service}</p>
                    <p style="margin: 0 0 8px 0;"><strong>Placement:</strong> ${placement}</p>
                    <p style="margin: 0;"><strong>Preferred Date:</strong> ${preferredDate || "Flexible"} (${preferredTime || "Studio hours"})</p>
                  </div>

                  ${isDepositRequired ? `
                    <div style="background: #fdfcf7; border: 1px solid #D4C59D; padding: 18px; border-radius: 6px; margin: 24px 0; text-align: center;">
                      <h3 style="margin: 0 0 8px 0; color: #111;">Securing Your Tattoo Booking</h3>
                      <p style="margin: 0 0 16px 0; color: #555; font-size: 14px;">Tattoo appointments are locked into our diary once the £50 booking deposit is received.</p>
                      <a href="https://buy.stripe.com/9AQ4je1EQ3ff7T24gh" style="display: inline-block; background: #111111; color: #ffffff; font-weight: bold; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px;">
                        Pay £50 Deposit via Secure Stripe Checkout →
                      </a>
                    </div>
                  ` : `
                    <p>Our studio team will review your concept and contact you within 24 hours to confirm your consultation slot.</p>
                  `}

                  <p>Have an urgent question or need same-day availability? Feel free to message us on WhatsApp:</p>
                  <p><a href="https://wa.me/${whatsappNumber}" style="color: #25D366; font-weight: bold; text-decoration: none;">Message us on WhatsApp →</a></p>

                  <div style="margin-top: 30px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
                    <p style="margin: 0;">Angel Tattooz • Studio A, 15 Station Parade, Cockfosters, London EN4 0DL</p>
                  </div>
                </div>
              </div>
            `,
        })
        console.log(`[RESEND SUCCESS] Customer confirmation email sent to ${email}`)
      } catch (custErr) {
        console.warn("[RESEND WARNING] Customer confirmation email skipped:", custErr)
      }
    } catch (emailErr) {
      console.error("[RESEND CRITICAL] Email delivery failed entirely:", emailErr)
      if (!emailDelivered) {
        return {
          success: false,
          error: "Booking notification failed to dispatch. Please contact the studio directly via WhatsApp.",
          whatsappFallbackUrl: buildWhatsAppFallback(name, placement),
        }
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
    const whatsappNumber = (process.env.WHATSAPP_NUMBER || BUSINESS_CONFIG.contact.whatsapp).replace("+", "")
    return {
      success: false,
      error: "Booking notification failed to dispatch. Please contact the studio directly via WhatsApp.",
      whatsappFallbackUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Angel Tattooz, I would like to book a tattoo appointment / consultation.")}`,
    }
  }
}
