import type React from "react";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { PortfolioSchema } from "@/components/portfolio-schema";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kodexa.ar"),

  title: {
    default: "Kodexa | Desarrollo Web y Software a Medida",
    template: "%s | Kodexa",
  },

  description:
    "Kodexa es un estudio de producto digital: desarrollamos sitios web, software a medida, sistemas y plataformas digitales, MVPs y productos SaaS pensados para crecer junto a tu negocio.",

  keywords: [
    "desarrollo web",
    "desarrollo de software",
    "desarrollo de software a medida",
    "software a medida",
    "productos digitales",
    "desarrollo web Argentina",
  ],

  authors: [{ name: "Lautaro Aquino", url: "https://kodexa.ar" }],

  creator: "Kodexa",
  publisher: "Kodexa",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Kodexa — Desarrollo Web y Software a Medida",
    description:
      "Diseñamos y desarrollamos productos digitales — sitios web, sistemas a medida, plataformas y MVPs — pensados para crecer junto a tu negocio.",
    url: "https://kodexa.ar",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kodexa — Estudio de desarrollo web y software a medida",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kodexa — Desarrollo Web y Software a Medida",
    description:
      "Sitios web, sistemas a medida y plataformas digitales pensados para crecer junto a tu negocio.",
    images: ["/og-image2.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ff6a00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark bg-background">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />

        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppFloat />
        <StructuredData />
        <PortfolioSchema />
        <Analytics />
      </body>
    </html>
  );
}
