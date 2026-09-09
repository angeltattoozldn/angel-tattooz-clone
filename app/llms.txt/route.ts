import { NextResponse } from 'next/server';
import { BUSINESS_CONFIG } from '@/config/business.config';

export async function GET() {
  const content = `# ${BUSINESS_CONFIG.businessName}
> Premium tattoo studio in North London. Art You Can Wear.

Angel Tattooz specializes in bespoke custom tattooing, black and grey realism, fine line, Japanese Irezumi, and cover-up tattoos.

## Business Information
- Name: ${BUSINESS_CONFIG.businessName}
- Address: Studio A, 15 Station Parade, Cockfosters, EN4 0DL, United Kingdom
- Building Context: Located in: Derma Sence
- Hours: 11:30 AM - 6:30 PM Mon-Sat (Sunday: Appointments Only)
- Phone (Studio): ${BUSINESS_CONFIG.contact.phoneDisplay}
- Phone (Mobile): ${BUSINESS_CONFIG.contact.phone2Display}
- Email: ${BUSINESS_CONFIG.contact.email}

## Key Information & Links
- [Home Page](https://www.angeltattooz.co.uk/): Studio overview and showcase.
- [Bookings](https://www.angeltattooz.co.uk/bookings/): Online consultation booking and £50 deposit payment.
- [Services & Styles](https://www.angeltattooz.co.uk/services/): Custom tattoos, fine line, realism, and cover-ups.
- [Studio Reviews](https://www.angeltattooz.co.uk/reviews/): 5-star client testimonials and ratings.
- [Contact & Location](https://www.angeltattooz.co.uk/contact-us/): Find our studio and get in touch.
- [Blog & Guides](https://www.angeltattooz.co.uk/blog/): Tattoo aftercare, style guides, and studio articles.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
