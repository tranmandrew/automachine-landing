import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Automachine | Professional Watch Grading Platform",
  description: "Simple, transparent pricing for professional watch condition grading. Start free, scale with credits, or go unlimited with Pro.",
  keywords: "watch grading pricing, AI watch analysis cost, professional watch tools, watch reselling automation, Automachine pricing",
  openGraph: {
    title: "Pricing - Automachine | Professional Watch Grading",
    description: "Professional watch condition grading with 5-stage analysis pipeline. Detailed reports, marketplace exports, API access.",
    images: ["https://res.cloudinary.com/dxnohgxkg/image/upload/v1720890521/automachinefull1_qwgmva.png"],
    url: "https://automachine.dev/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Automachine | AI Watch Grading",
    description: "Professional AI-powered watch condition assessment and listing generation. Multi-model analysis pipeline.",
    images: ["https://res.cloudinary.com/dxnohgxkg/image/upload/v1720890521/automachinefull1_qwgmva.png"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}