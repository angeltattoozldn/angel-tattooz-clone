import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | Angel Tattooz",
  description: "Book your tattoo consultation or appointment at Angel Tattooz.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
