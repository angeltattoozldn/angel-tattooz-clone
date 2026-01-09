import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { BUSINESS_CONFIG, getFullAddress } from "@/config/business.config"

export function SiteFooter() {
  const services = [
    { name: "Custom Tattoo Design", href: "/services/custom-tattoo-design" },
    { name: "Black & Gray Tattoos", href: "/services/black-gray-tattoos" },
    { name: "Color Tattoos", href: "/services/color-tattoos" },
    { name: "Cover-Up Tattoos", href: "/services/cover-up-tattoos" },
  ]

  const areas = [
    { name: "Barnet", href: "/areas/barnet" },
    { name: "Cockfosters", href: "/areas/cockfosters" },
    { name: "Southgate", href: "/areas/southgate" },
    { name: "Enfield", href: "/areas/enfield" },
    { name: "Potters Bar", href: "/areas/potters-bar" },
    { name: "Finchley", href: "/areas/finchley" },
  ]

  const resources = [
    { name: "FAQ", href: "/faq" },
    { name: "Aftercare", href: "/aftercare" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl text-primary">{BUSINESS_CONFIG.businessName}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium tattoo studio in North London. Creating art you can wear since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href={BUSINESS_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Service Areas</h4>
            <ul className="space-y-3">
              {areas.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{getFullAddress()}</span>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {BUSINESS_CONFIG.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Hours</p>
              <p>Mon-Sat: {BUSINESS_CONFIG.openingHours.tuesday}</p>
              <p>Sunday: {BUSINESS_CONFIG.openingHours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
