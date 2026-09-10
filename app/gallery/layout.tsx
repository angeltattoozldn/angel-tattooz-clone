import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Gallery | Angel Tattooz",
  description: "View our portfolio of custom tattoos by Angel Tattooz artists.",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/gallery/",
  },
};

export const revalidate = 3600; // Cache and revalidate once per hour

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
