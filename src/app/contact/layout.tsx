import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Contact - Automachine | Professional Watch Analysis",
  description: "Contact Automachine for enterprise pricing, volume discounts, and custom integrations for professional watch analysis.",
  keywords: "enterprise contact, volume pricing, custom integrations, professional watch analysis, Automachine",
  openGraph: {
    title: "Enterprise Contact - Automachine",
    description: "Contact us for enterprise pricing and custom solutions for professional watch analysis.",
    images: ["https://res.cloudinary.com/dxnohgxkg/image/upload/v1720890521/automachinefull1_qwgmva.png"],
    url: "https://automachine.dev/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Contact - Automachine",
    description: "Contact us for enterprise pricing and custom solutions for professional watch analysis.",
    images: ["https://res.cloudinary.com/dxnohgxkg/image/upload/v1720890521/automachinefull1_qwgmva.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}