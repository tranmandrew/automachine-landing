import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Automachine",
  description: "Terms of Service for Automachine professional watch grading platform.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}