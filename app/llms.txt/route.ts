import { NextResponse } from 'next/server';
import { BUSINESS_CONFIG, getFullAddress } from '@/config/business.config';

export async function GET() {
  const content = `# ${BUSINESS_CONFIG.businessName} - North London Tattoo Studio

${BUSINESS_CONFIG.businessName} is an award-winning premium tattoo studio located in ${BUSINESS_CONFIG.primaryAddress.area}, North London (${BUSINESS_CONFIG.primaryAddress.city}, ${BUSINESS_CONFIG.primaryAddress.postcode}).

## Services
- Custom Tattoo Design
- Black and Grey Realism
- Colour Tattoos
- Cover-up Tattoos
- Tattoo Consultations

## Artists & Styles
Our expert artists specialize in realism, minimalist, tribal, traditional, and custom abstract designs.

## Contact & Location
- Address: ${getFullAddress()}
- Phone: ${BUSINESS_CONFIG.contact.phoneDisplay}
- Hours: Mon-Sat ${BUSINESS_CONFIG.openingHours.monday}

## Booking
To book an appointment, please visit our booking page or contact us directly.
`;
  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
