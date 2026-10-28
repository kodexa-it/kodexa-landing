import { consentBootScript } from "@/lib/consent"

/**
 * Google Tag Manager (contenedor de Kodexa).
 * Solo se carga en el sitio publicado: ni en desarrollo local ni en las previews de Netlify,
 * para no mezclar visitas de prueba con las reales.
 * Los eventos de conversión de lib/analytics.ts ya se envían a window.dataLayer.
 *
 * Consent Mode v2: antes de cargar GTM se fija todo en `denied` (lib/consent.ts). La etiqueta de Google
 * solo guarda cookies de analítica cuando la persona acepta en el banner (components/consent/cookie-banner.tsx).
 */
export const GTM_ID = "GTM-PX8R7ZH8"

/** Va lo más arriba posible dentro de <head>. */
export function GtmHead() {
  return (
    <>
      <script id="gtm-consent" dangerouslySetInnerHTML={{ __html: consentBootScript }} />
      <script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
    </>
  )
}

/** Va justo después de la apertura de <body>. */
export function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  )
}
