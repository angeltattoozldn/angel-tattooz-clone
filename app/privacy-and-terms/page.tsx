import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Legal & Privacy Information | Angel Tattooz",
  description: "Terms and conditions and privacy policy for Angel Tattooz, a premium tattoo studio in North London.",
}

export default function PrivacyAndTermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 pb-20">
        {/* Full-Width Hero Section with Background Image */}
        <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center border-b border-zinc-800/60 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Angel Tattooz Studio"
              className="object-cover"
              fill
              priority
              src="/images/home/Angle-Tattooz-Website-Hero-Image.webp"
            />
            <div className="absolute inset-0 bg-black/70 bg-linear-to-t from-[#0a0a0a] via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center px-4 pt-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-hey text-[#ffe4e6] tracking-wide leading-tight max-w-5xl mx-auto drop-shadow-lg">
              Legal & Privacy Information
            </h1>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mt-16">
          <div className="prose prose-invert max-w-none prose-headings:font-sans prose-headings:font-bold prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:text-center prose-h2:mb-8 prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base prose-a:text-[#D4C59D] prose-a:no-underline hover:prose-a:underline">
            
            {/* Terms and Conditions Section */}
            <h2 className="font-display text-4xl text-[#FAD5E6] !mb-12">Terms and Conditions</h2>
            
            <p className="font-bold">Welcome to Angel Tattooz</p>
            <p>
              By accessing or using our website at <a href="https://www.angeltattooz.co.uk">www.angeltattooz.co.uk</a>, you agree to comply with and be bound by these Terms and Conditions. Please review these terms carefully. If you do not agree with these terms, you should not use this website.
            </p>

            <h3>1. Definitions</h3>
            <p>In these Terms and Conditions, “we”, “us”, “our” refers to Angel Tattooz, and “you”, “your” refers to the client or website user.</p>

            <h3>2. General</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Service Provider:</strong> Angel Tattooz, located at 3 Mount Parade, Mount Pleasant, Cockfosters, EN4 9DD.</li>
              <li><strong>Contact Information:</strong> For any inquiries, please email us at <a href="mailto:Ink@angeltattooz.co.uk">Ink@angeltattooz.co.uk</a>.</li>
              <li><strong>Governing Law:</strong> These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.</li>
            </ul>

            <h3>3. Appointments and Cancellations</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Booking:</strong> Customers can book appointments via our online booking form or by contacting the studio directly.</li>
              <li><strong>Consultation:</strong> Free 20-minute consultations are available for customers with existing designs. Consultations requiring more time or for customers without a design may incur charges.</li>
              <li><strong>Custom Complex Tattoos:</strong> Quotations are available upon request, with no deposit required.</li>
              <li><strong>Cancellations:</strong> Appointments must be cancelled at least 24 hours in advance. Failure to do so will result in forfeiture of the deposit. Rescheduling within 24 hours of the appointment will also result in forfeiture of the deposit unless otherwise agreed upon by Angel Tattooz.</li>
              <li><strong>No-Show Policy:</strong> No-shows will forfeit their deposit and may be required to pay a new deposit to secure another appointment.</li>
              <li><strong>Late Arrivals:</strong> If you arrive more than 15 minutes late for your appointment, we may not be able to accommodate you, and your deposit will be forfeited.</li>
            </ul>

            <h3>4. Payments</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Deposits:</strong> A deposit is required to secure your appointment. This deposit is non-refundable and will be deducted from the final cost of your tattoo. Deposits are non-refundable under any circumstances.</li>
              <li><strong>Pricing:</strong> Tattoo pricing varies based on design complexity, size, and colour.</li>
              <li><strong>Methods:</strong> Payments can be made via credit/debit card, PayPal, bank transfer, or cash.</li>
              <li><strong>Final Payment Due Date:</strong> The balance of the payment for your tattoo must be made on the day of your appointment. Failure to pay in full may result in legal action.</li>
              <li><strong>Additional Charges:</strong> Any additional work or touch-ups required due to client neglect of aftercare instructions may incur additional charges.</li>
            </ul>

            <h3>5. Health and Safety</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Patch Test:</strong> Required for customers who have not had a tattoo before. This must be done 24 hours before the tattoo appointment. If a patch test is not conducted as required, the client assumes all risks of allergic reactions or complications.</li>
              <li><strong>Medical Conditions:</strong> Customers must disclose in writing any medical conditions, allergies, or medications that may affect the tattoo process. Failure to disclose such information releases Angel Tattooz from any liability.</li>
              <li><strong>Age Requirement:</strong> Customers must be at least 18 years old to get a tattoo.</li>
            </ul>

            <h3>6. Client Consent and Acknowledgment</h3>
            <p>By signing the consent form, clients agree to the following:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Health Disclosure:</strong> Advising the tattoo artist of any conditions that might affect the healing of the tattoo.</li>
              <li><strong>Pregnancy and Influence:</strong> Confirming they are not pregnant, nursing, or under the influence of alcohol or drugs.</li>
              <li><strong>Medical Conditions:</strong> Declaring the absence of conditions such as acne, scarring, eczema, psoriasis, diabetes, epilepsy, haemophilia, heart conditions, HIV/AIDS, organ or bone marrow transplants, cancer, or mental impairments that might affect judgment.</li>
              <li><strong>Allergic Reactions:</strong> Acknowledging the possibility of allergic reactions to pigments or processes used.</li>
              <li><strong>Infection Risk:</strong> Understanding the risk of infection and the importance of following aftercare instructions. Clients agree to follow all aftercare instructions provided by Angel Tattooz. We are not liable for any issues arising from failure to follow these instructions.</li>
              <li><strong>Colour Variations:</strong> Accepting variations in colour and design due to skin tone and other factors. Clients are responsible for the final approval of the design, placement, and spelling (if applicable). Angel Tattooz is not liable for dissatisfaction resulting from these aspects once the tattoo is applied.</li>
              <li><strong>Skin Treatments:</strong> Acknowledging potential adverse effects of skin treatments on the tattoo.</li>
              <li><strong>Numbing Agents:</strong> Understanding the risks associated with using numbing agents.</li>
              <li><strong>Permanent Change:</strong> Recognizing the permanent nature of tattoos and the difficulty of removal.</li>
              <li><strong>Legal Age:</strong> Confirming they are over 18 years old.</li>
              <li><strong>Satisfaction and Liability:</strong> Accepting that Angel Tattooz is not liable for dissatisfaction with the design, placement, or outcome of the tattoo. Angel Tattooz is not liable for minor variations in design, colour, or placement that may occur due to the nature of tattooing.</li>
              <li><strong>Indemnity:</strong> Clients agree to indemnify and hold harmless Angel Tattooz from any claims, damages, or expenses arising from their failure to disclose relevant health information.</li>
            </ul>

            <h3>7. Intellectual Property</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Content:</strong> All content on this website, including images, text, and designs, is the property of Angel Tattooz and is protected by copyright laws. Unauthorized use of any content from this website is prohibited.</li>
              <li><strong>Client Consent for Use of Images:</strong> By receiving a tattoo from Angel Tattooz, you consent to the use of images of your tattoo for marketing and promotional purposes, unless you request otherwise in writing before the tattoo session.</li>
            </ul>

            <h3>8. Liability and Accuracy</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Disclaimer of Warranties:</strong> Angel Tattooz does not warrant the accuracy or completeness of any information on this website and is not liable for any errors or omissions. All services are provided &apos;as is&apos; without any warranties, express or implied.</li>
              <li><strong>Limitation of Liability:</strong> Angel Tattooz shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or website.</li>
            </ul>

            <h3>9. Changes to Terms</h3>
            <p>We reserve the right to modify these terms at any time. Significant changes to these terms will be communicated to clients via email or through an announcement on our website. Changes will be effective immediately upon posting on this page, and it is the client&apos;s responsibility to review the terms regularly.</p>

            <h3>10. Force Majeure</h3>
            <p>Angel Tattooz shall not be liable for any failure to perform its obligations under these terms due to events beyond its reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, strikes, lockouts, or other industrial action, natural disasters, or interruptions to utility services.</p>

            <h3>11. Severability</h3>
            <p>If any provision of these Terms and Conditions is found to be invalid, unenforceable, or illegal, the remaining provisions will continue in full force and effect.</p>

            <h3>12. Entire Agreement</h3>
            <p>These Terms and Conditions, together with our Privacy Policy and any other legal notices published by Angel Tattooz, constitute the entire agreement between you and Angel Tattooz regarding the use of our services and website.</p>
            
            <p className="mt-8 font-semibold italic text-center">By using our website, you agree to our Terms and Conditions and acknowledge our Privacy Policy. Thank you for choosing Angel Tattooz for your tattoo journey and we look forward to seeing you soon.</p>

            {/* Privacy Policy Section */}
            <div className="my-16 border-t border-zinc-800"></div>

            <h2 className="font-display text-4xl text-[#FAD5E6] !mb-12">Privacy Policy</h2>
            
            <p className="font-bold">Introduction</p>
            <p>Angel Tattooz is committed to protecting your personal data and respecting your privacy. This policy explains how we collect, use, and protect your personal information.</p>

            <h3>1. Data Controller</h3>
            <ul className="list-none pl-0 space-y-1 text-zinc-300 text-sm md:text-base">
              <li><strong>Company:</strong> Angel Tattooz</li>
              <li><strong>Address:</strong> 3 Mount Parade, Mount Pleasant, Cockfosters, EN4 9DD</li>
              <li><strong>Website:</strong> <a href="https://www.angeltattooz.co.uk">www.angeltattooz.co.uk</a></li>
              <li><strong>Contact:</strong> <a href="mailto:Ink@angeltattooz.co.uk">Ink@angeltattooz.co.uk</a></li>
            </ul>

            <h3>2. Information We Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Booking:</strong> Customers can book appointments via our online booking form or by contacting the studio directly.</li>
              <li><strong>Consultation:</strong> Free 20-minute consultations are available for customers with existing designs.</li>
              <li><strong>Paid Sessions:</strong> Consultations requiring more time or for customers without a design may incur charges.</li>
              <li><strong>Custom Complex Tattoos:</strong> Quotations are available upon request, with no deposit required.</li>
              <li><strong>Cancellations:</strong> Appointments must be canceled at least 24 hours in advance. Failure to do so may result in forfeiture of the deposit.</li>
            </ul>

            <h3>3. How We Use Your Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Service Delivery:</strong> To manage bookings, consultations, and provide tattoo services.</li>
              <li><strong>Communication:</strong> To contact you regarding your appointments or respond to your inquiries.</li>
              <li><strong>Marketing:</strong> To send promotional emails and updates, if you have opted in to receive them.</li>
              <li><strong>Compliance:</strong> To comply with legal and regulatory requirements.</li>
            </ul>

            <h3>4. Legal Basis for Processing</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Consent:</strong> Where you have provided explicit consent for us to process your personal data.</li>
              <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you.</li>
              <li><strong>Legal Obligation:</strong> Where we are required to comply with a legal obligation.</li>
              <li><strong>Legitimate Interests:</strong> For purposes of our legitimate interests, provided your interests and fundamental rights do not override those interests.</li>
            </ul>

            <h3>5. Data Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal data to outside parties without your consent, except as required by law or for operational purposes with trusted third parties who assist us in operating our website and conducting our business.</p>

            <h3>6. Data Security</h3>
            <p>We implement a variety of security measures to maintain the safety of your personal information. All personal data is stored securely and access is restricted to authorized personnel only. Transactions via Paypal and Stripe are encrypted and handled securely to protect your financial data. For more details, please refer to the respective privacy policies of <a href="https://www.paypal.com/us/legalhub/privacy-full" target="_blank" rel="noopener noreferrer">Paypal</a> and <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe</a>.</p>

            <h3>7. Data Retention</h3>
            <p>We retain personal data for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.</p>

            <h3>8. Your Rights</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Access:</strong> You have the right to request access to the personal data we hold about you.</li>
              <li><strong>Rectification:</strong> You have the right to request correction of any inaccurate data.</li>
              <li><strong>Erasure:</strong> You have the right to request deletion of your personal data, subject to legal requirements.</li>
              <li><strong>Restriction:</strong> You have the right to request restriction of processing under certain circumstances.</li>
              <li><strong>Portability:</strong> You have the right to request transfer of your personal data to another party.</li>
              <li><strong>Objection:</strong> You have the right to object to the processing of your personal data.</li>
            </ul>

            <h3>9. Cookies</h3>
            <p>Our website uses cookies to enhance user experience. You can choose to accept or decline cookies through your browser settings. For more details, please refer to our Cookie Policy.</p>

            <h3>10. Changes to This Policy</h3>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page, and where appropriate, notified to you by email.</p>

            <h3>11. Contact Us</h3>
            <p>If you have any questions or concerns about our privacy practices, please contact us at <a href="mailto:Ink@angeltattooz.co.uk">Ink@angeltattooz.co.uk</a>.</p>

            <p className="mt-8 font-semibold italic text-center">By using our website, you agree to our Terms and Conditions and acknowledge our Privacy Policy. Thank you for choosing Angel Tattooz for your tattoo journey.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
