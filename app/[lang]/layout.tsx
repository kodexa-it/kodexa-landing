import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { WhatsappFloat } from "@/components/layout/whatsapp-float"
import { JsonLd, organizationLd } from "@/components/seo/json-ld"
import { GtmHead, GtmNoScript } from "@/components/seo/google-tag-manager"
import { ClarityHead } from "@/components/seo/clarity"
import { CookieBanner } from "@/components/consent/cookie-banner"
import { AttributionCapture } from "@/components/seo/attribution"
import { loadTracking, site } from "@/lib/content/site"
import { localeMeta, locales } from "@/lib/i18n/core"
import { LocaleProvider } from "@/lib/i18n/client"
import { clientMessages } from "@/lib/i18n/messages"
import { getT } from "@/lib/i18n/server"
import { knownSlugs } from "@/lib/content"
import "../globals.css"

// IBM Plex alojada en el proyecto (OFL, ver app/fonts/OFL-LICENSE.txt):
// el build no depende de descargar Google Fonts, que fallaba en Netlify.
const plexSans = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
})
const plexMono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
})

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getT()
  return {
    metadataBase: new URL(site.url),
    title: { default: t("meta.siteTitle"), template: "%s | Kodexa" },
    authors: [{ name: site.founder.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    // description, canonical, hreflang, robots y Open Graph/Twitter NO van acá: cada página los define con
    // pageMetadata() (lib/seo.ts). Si vivieran en el layout, la 404 los heredaría (canonical de la home, index, etc.).
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const viewport: Viewport = {
  themeColor: "#fafaf8",
  colorScheme: "light",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, t } = await getT()
  return (
    <html lang={localeMeta[locale].htmlLang} className={`${plexSans.variable} ${plexMono.variable}`}>
      <head>
        {loadTracking && (
          <>
            <GtmHead />
            <ClarityHead />
          </>
        )}
      </head>
      <body>
        <LocaleProvider locale={locale} messages={clientMessages(locale)}>
          {loadTracking && <GtmNoScript />}
          <a
            href="#contenido"
            className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            {t("common.skipToContent")}
          </a>
          <SiteHeader known={knownSlugs} />
          <main id="contenido">{children}</main>
          <SiteFooter />
          <WhatsappFloat />
          {loadTracking && <CookieBanner />}
          <AttributionCapture />
          <JsonLd data={organizationLd(locale, t)} />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  )
}
