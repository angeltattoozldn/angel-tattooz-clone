export interface BusinessLocation {
  businessName: string
  primaryAddress: {
    street: string
    area: string
    city: string
    postcode: string
    country: string
    state: "confirmed" | "TBC"
    buildingContext?: string
  }
  contact: {
    phone: string
    phoneDisplay: string
    phone2: string
    phone2Display: string
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
    tiktok: string
    youtube: string
    pinterest: string
  }
  reviews: {
    googleRating: number
    reviewCount: number
    googleReviewUrl: string
    googleMapsUrl: string
  }
}

export const BUSINESS_CONFIG: BusinessLocation = {
  businessName: "Angel Tattooz",
  primaryAddress: {
    street: "Studio A, 15 Station Parade",
    area: "Cockfosters",
    city: "Barnet, London",
    postcode: "EN4 0DL",
    country: "United Kingdom",
    state: "confirmed",
  },
  contact: {
    phone: "+447949123424",
    phoneDisplay: "+44 79 4912 3424",
    phone2: "+447949123424",
    phone2Display: "+44 79 4912 3424",
    whatsapp: "+447949123424",
    email: "ink@angeltattooz.co.uk",
  },
  geo: {
    latitude: 51.6511,
    longitude: -0.1495,
  },
  openingHours: {
    monday: "11:30 AM – 6:30 PM",
    tuesday: "11:30 AM – 6:30 PM",
    wednesday: "11:30 AM – 6:30 PM",
    thursday: "11:30 AM – 6:30 PM",
    friday: "11:30 AM – 6:30 PM",
    saturday: "11:30 AM – 6:30 PM",
    sunday: "Appointments Only",
  },
  relocation: {
    isRelocating: true,
    note: "Studio A, 15 Station Parade, Cockfosters, EN4 0DL — Next door to Costa Coffee",
    estimatedDate: undefined,
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61558770900820",
    instagram: "https://www.instagram.com/angeltattoozldn/",
    twitter: "https://twitter.com/angeltattooz",
    tiktok: "https://www.tiktok.com/@angeltattoozldn",
    youtube: "https://www.youtube.com/channel/UC6rRXUxTs7eu7rZZtfDXqkQ",
    pinterest: "https://www.pinterest.com/ink1180/",
  },
  reviews: {
    googleRating: 5.0,
    reviewCount: 127,
    googleReviewUrl: "https://g.page/r/CaJWy-nqXoSYEBM/review",
    googleMapsUrl: "https://maps.app.goo.gl/aUofWWXSFmsiukHt5",
  },
}

export function getFullAddress(): string {
  const { street, area, city, postcode } = BUSINESS_CONFIG.primaryAddress
  return `${street}, ${area}, ${city} ${postcode}`
}

export function isLocationConfirmed(): boolean {
  return BUSINESS_CONFIG.primaryAddress.state === "confirmed"
}
