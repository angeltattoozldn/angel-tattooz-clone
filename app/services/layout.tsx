import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Angel Tattooz",
  description: "Explore the tattoo and piercing services offered at Angel Tattooz.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
