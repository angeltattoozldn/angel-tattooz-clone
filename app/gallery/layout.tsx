import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Gallery | Angel Tattooz",
  description: "View our portfolio of custom tattoos by Angel Tattooz artists.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
