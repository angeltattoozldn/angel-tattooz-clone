export interface BusinessLocation {
  businessName: string
  primaryAddress: {
    street: string
    area: string
    city: string
    postcode: string
    country: string
    state: "confirmed" | "TBC"
  }
  contact: {
    phone: string
    phoneDisplay: string
    whatsapp: string
    email: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  openingHours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  relocation: {
    isRelocating: boolean
    note?: string
    estimatedDate?: string
  }
  social: {
    facebook: string
    instagram: string
    twitter: string
  }
}

export const BUSINESS_CONFIG: BusinessLocation = {
  businessName: "Angel Tattooz",
  primaryAddress: {
    street: "3 Mount Parade, Mount Pleasant",
    area: "Cockfosters, Barnet",
    city: "London",
    postcode: "EN4 9DD",
    country: "GB",
    state: "confirmed",
  },
  contact: {
    phone: "+442082163400",
    phoneDisplay: "020 8216 3400",
    whatsapp: "+442082163400",
    email: "info@angeltattooz.co.uk",
  },
  geo: {
    latitude: 51.6502,
    longitude: -0.1999,
  },
  openingHours: {
    monday: "Closed",
    tuesday: "11:30 AM – 6:30 PM",
    wednesday: "11:30 AM – 6:30 PM",
    thursday: "11:30 AM – 6:30 PM",
    friday: "11:30 AM – 6:30 PM",
    saturday: "11:30 AM – 6:30 PM",
    sunday: "Appointment Only",
  },
  relocation: {
    isRelocating: false,
    note: undefined,
    estimatedDate: undefined,
  },
  social: {
    facebook: "https://facebook.com/angeltattooz",
    instagram: "https://instagram.com/angeltattooz",
    twitter: "https://twitter.com/angeltattooz",
  },
}

export function getFullAddress(): string {
  const { street, area, city, postcode } = BUSINESS_CONFIG.primaryAddress
  return `${street}, ${area}, ${city} ${postcode}`
}

export function isLocationConfirmed(): boolean {
  return BUSINESS_CONFIG.primaryAddress.state === "confirmed"
}
