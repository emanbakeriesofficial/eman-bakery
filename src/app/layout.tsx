import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedCursor from "@/components/AnimatedCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eman Bakery | The Taste of Tradition | مخبز إيمان",
  description:
    "Eman Bakery — Manufacturing daily fresh bread since 2007, serving the Hejaz food sector. Restaurants, hotels, catering & more across Jeddah, Makkah, and Madinah.",
  keywords: "Eman Bakery, مخبز إيمان, fresh bread, bakery Jeddah, bread manufacturer, Saudi bakery, Hejaz food sector",
  authors: [{ name: "Eman Bakery" }],
  openGraph: {
    title: "Eman Bakery | The Taste of Tradition",
    description: "Manufacturing daily fresh bread since 2007. Serving restaurants, hotels, and catering across Jeddah, Makkah, and Madinah.",
    url: "https://www.emanbakeries.com",
    siteName: "Eman Bakery",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Loader />
        <ScrollProgress />
        <AnimatedCursor />
        {/* Noise overlay using inline SVG filter */}
        <svg className="noise-overlay" aria-hidden="true">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        {children}
      </body>
    </html>
  );
}
