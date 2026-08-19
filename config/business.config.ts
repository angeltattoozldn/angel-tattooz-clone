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
    street: "Studio A, 15 Station Parade",
    area: "Cockfosters",
    city: "Barnet",
    postcode: "EN4 0DL",
    country: "United Kingdom",
    state: "confirmed",
  },
  contact: {
    phone: "02082163400",
    phoneDisplay: "020 8216 3400",
    whatsapp: "+442082163400",
    email: "Ink@angeltattooz.co.uk",
  },
  geo: {
    latitude: 51.6517,
    longitude: -0.1488,
  },
  openingHours: {
    monday: "11:30 AM – 7:00 PM",
    tuesday: "11:30 AM – 7:00 PM",
    wednesday: "11:30 AM – 7:00 PM",
    thursday: "11:30 AM – 7:00 PM",
    friday: "11:30 AM – 7:00 PM",
    saturday: "11:30 AM – 7:00 PM",
    sunday: "Closed / Appointments Only",
  },
  relocation: {
    isRelocating: true,
    note: "We have relocated! Visit our new studio at Studio A, 15 Station Parade, Cockfosters, Barnet, EN4 0DL (Next to Cockfosters Tube Station).",
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
