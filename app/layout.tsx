import type { Metadata, Viewport } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { WhatsappFloat } from "@/components/layout/whatsapp-float"
import { JsonLd, organizationLd } from "@/components/seo/json-ld"
import { GtmHead, GtmNoScript } from "@/components/seo/google-tag-manager"
import { isPreview, loadTracking, site } from "@/lib/content/site"
import "./globals.css"

const plexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
})
const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kodexa | Estudio digital: diseño y desarrollo para negocios",
    template: "%s | Kodexa",
  },
  description: site.description,
  authors: [{ name: site.founder.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: isPreview
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kodexa | Estudio digital: diseño y desarrollo para negocios",
    description:
      "Diseñamos y desarrollamos sitios web, aplicaciones y sistemas a medida, pensados para crecer junto a tu negocio.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kodexa — estudio digital" }],
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodexa — Estudio digital",
    description: "Sitios web, aplicaciones y sistemas a medida pensados para crecer junto a tu negocio.",
    images: ["/og-image2.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#fafaf8",
  colorScheme: "light",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${plexSans.variable} ${plexMono.variable}`}>
      <head>{loadTracking && <GtmHead />}</head>
      <body>
        {loadTracking && <GtmNoScript />}
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <WhatsappFloat />
        <JsonLd data={organizationLd} />
        <Analytics />
      </body>
    </html>
  )
}
