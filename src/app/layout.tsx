import type { Metadata, Viewport } from "next";
import DockWrapper from '../components/DockWrapper';
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const viewport: Viewport = {
  themeColor: "#0d9488",
}

export const metadata: Metadata = {
  title: "Automachine – AI Grading & Listing for Watch Resellers",
  description: "Automachine helps watch resellers automate grading, specs, and listing exports with AI. Save time, reduce errors, and streamline your workflow.",
  keywords: "AI watch grading, watch condition assessment, luxury watch authentication, watch reselling automation, professional watch tools, watch inventory management, Automachine",
  authors: [{ name: "Automachine" }],
  openGraph: {
    title: "Automachine – AI Grading & Listing for Watch Resellers",
    description: "Automachine uses AI to automate grading, specs, and listings for watch resellers. Reduce manual work and scale inventory faster.",
    images: ["https://res.cloudinary.com/dxnohgxkg/image/upload/v1720890521/automachinefull1_qwgmva.png"],
    url: "https://automachine.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automachine – AI Grading & Listing for Watch Resellers",
    description: "Streamline your watch reselling workflow with AI-powered grading and listing automation.",
    images: ["https://res.cloudinary.com/dxnohgxkg/image/upload/v1720890521/automachinefull1_qwgmva.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased text-gray-800 h-screen overflow-hidden" suppressHydrationWarning={true}>
        {children}

        <DockWrapper />

        {/* Removed external CDN dependencies - using built-in Tailwind */}
      </body>
    </html>
  );
}
