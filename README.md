# Kodexa Studio — nueva web institucional (versión en revisión)

Proyecto aislado en `Desktop/Kodexa/kodexa-studio`. La web publicada vive en `../kodexa-landing` y **no fue modificada**.

## Ejecutar
```
npm install
npm run dev      # http://localhost:3100
npm run build && npm run start
npm run lint     # tsc --noEmit
```
`.env.local` (copiado, sin versionar) contiene `FORMINIT_API_KEY`. **Ojo:** el formulario usa el mismo form de Forminit que producción: un envío de prueba llega a la bandeja real.

## Estructura
- `app/` rutas (servicios y productos usan una plantilla `[slug]` alimentada por datos).
- `lib/content/` **todo el contenido**: `site`, `services`, `projects`, `products`, `method`, `articles`.
- `components/ui` (botón, sección, FAQ, iconos, logo), `components/layout`, `components/sections`, `components/forms`, `components/visuals`, `components/seo`.
- `app/globals.css` tokens (`@theme`), escala tipográfica, sistema de vidrio (`.glass`, `.glass-dark`), animaciones.

Agregar un servicio = una entrada en `lib/content/services.ts`. Un proyecto = una entrada en `projects.ts`.

## Preview vs. producción
`robots`/`noindex` activos por defecto. Al publicar: `NEXT_PUBLIC_SITE_PREVIEW=false`.
URLs conservadas: todas las de kodexa.ar (+ `/estudio`, `/contacto` nuevas). Se mantiene `/proyectos/nexo → /productos/nexo`.
`/#contact` ya no es el formulario (ahora `/contacto`); la sección CTA del home conserva `id="contact"`.

## Pendiente de confirmar
1. **Estado de Nodo**: figura "En desarrollo" (el repo `../crm` está en fase de bootstrap). Confirmar.
2. **Precios** (desde USD 250/500/900/900; USD 300/mes en Equipo IT): vigencia sin confirmar. `showPrices` en `lib/content/site.ts` los oculta. El sitio actual muestra además "Sistemas web a medida desde USD 1800+", que contradice "Software a medida desde USD 900"; no se usó.
3. Cargo de Lautaro: "Founder & Full Stack Developer" (el sitio actual dice Co-Founder en una parte y Founder en otra).
4. Imagen/estado de Waste Treatment (hoy tipográfica, "En desarrollo") y destino de `public/images/unocore.png` y `cms.png` (no usadas; sin contexto de proyecto).
5. Declaración "En producción" de Nexo: tomada del artículo y páginas actuales.
6. Hero: las imágenes conceptuales no estaban disponibles; se siguió la descripción del brief.
7. Fuera de alcance por ahora: Analytics (`@vercel/analytics` queda igual), DNS/deploy no tocados. Falta definir config de deploy (se quitó `netlify.toml` de la copia; la original sigue intacta).
