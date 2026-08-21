import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Angel Tattooz London
> Premier custom tattoo studio located in Cockfosters, Barnet, North London (EN4 0DL).

Angel Tattooz specializes in bespoke custom tattooing, black and grey realism, fine line, Japanese Irezumi, and cover-up tattoos.

## Key Information & Links
- [Home Page](https://www.angeltattooz.co.uk/): Studio overview and showcase.
- [Bookings](https://www.angeltattooz.co.uk/bookings/): Online consultation booking and £50 deposit payment.
- [Services & Styles](https://www.angeltattooz.co.uk/services/): Custom tattoos, fine line, realism, and cover-ups.
- [Studio Reviews](https://www.angeltattooz.co.uk/reviews/): 5-star client testimonials and ratings.
- [Contact & Location](https://www.angeltattooz.co.uk/contact-us/): Studio A, 15 Station Parade, Cockfosters, Barnet, EN4 0DL.
- [Blog & Guides](https://www.angeltattooz.co.uk/blog/): Tattoo aftercare, style guides, and studio articles.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
