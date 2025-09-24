import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Automachine",
  description: "Privacy Policy for Automachine professional watch grading platform.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}