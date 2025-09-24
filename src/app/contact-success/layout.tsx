import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Automachine Enterprise",
  description: "Thank you for your enterprise inquiry. We'll be in touch within 24 hours.",
  robots: "noindex",
};

export default function ContactSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}