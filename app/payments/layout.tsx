import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payments | Angel Tattooz",
  description: "Information about deposits and payments at Angel Tattooz.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
