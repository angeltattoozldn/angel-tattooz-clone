import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Angel Tattooz - North London Tattoo Studio

Angel Tattooz is an award-winning premium tattoo studio located in Cockfosters, North London (Barnet, EN4 0DL).

## Services
- Custom Tattoo Design
- Black and Grey Realism
- Colour Tattoos
- Cover-up Tattoos
- Tattoo Consultations

## Artists & Styles
Our expert artists specialize in realism, minimalist, tribal, traditional, and custom abstract designs.

## Contact & Location
- Address: Studio A, 15 Station Parade, Cockfosters, Barnet, EN4 0DL
- Phone: +44 7949 123424
- Hours: Mon-Sat 11:30 AM to 7:00 PM

## Booking
To book an appointment, please visit our booking page or contact us directly.
`;
  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
