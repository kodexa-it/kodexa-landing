# Medición de conversiones (GTM → GA4)

El sitio carga el contenedor de Google Tag Manager `GTM-PX8R7ZH8` (solo en producción, ver `lib/content/site.ts → loadTracking`). Ese contenedor incluye la etiqueta de Google con la propiedad de GA4 `G-BX1MFLCDJH`.

El código **no envía nada a GA4 directamente**: publica cada evento en `window.dataLayer` (`lib/analytics.ts`) y GTM decide qué reenviar. Por eso, para que los eventos aparezcan en GA4, hay que crear el disparador y la etiqueta en GTM (paso 1 de abajo). Sin eso, los eventos solo llegan a Vercel Analytics.

## Eventos que emite el sitio

| Evento | Cuándo | Parámetros (ninguno es dato personal) |
|---|---|---|
| `whatsapp_click` | Clic en cualquier botón de WhatsApp. **No** significa que se envió un mensaje. | `cta_location`, `cta_label`, `page_path`, `contact_method` (`whatsapp`), `service_type` (si aplica) |
| `form_start` | Primer foco en un campo del formulario. | `form_source` |
| `form_submit` | El servidor **confirmó** que guardó la consulta (Forminit). | `form_source`, `contact_method`, `project_type`, `lead_type`, `action` |
| `generate_lead` | Mismo momento que `form_submit`: consulta comercial registrada. Es la conversión. | igual que `form_submit` |
| `form_error` | Falla de validación o de guardado. | `form_source`, `error_type` (`validation` / `server`), `error_fields` (solo nombres de campo) |

`cta_location` posibles: `hero`, `services`, `projects`, `products`, `contact`, `navbar`, `footer`, `floating`, `cta_final`.

Un clic en WhatsApp **no** emite `generate_lead`: es una interacción, no un lead. Los eventos `lead_form_submit` y `cta_click` de WhatsApp fueron reemplazados por los de arriba (`cta_click` sigue usándose para botones que no son de WhatsApp).

## 1. Configuración en GTM (acción manual, una sola vez)

1. **Variables** → *Nuevas* → tipo *Variable de capa de datos*, una por parámetro (versión 2): `cta_location`, `cta_label`, `page_path`, `service_type`, `contact_method`, `form_source`, `project_type`, `lead_type`, `action`, `error_type`, `error_fields`.
2. **Activadores** → *Nuevo* → tipo *Evento personalizado*, nombre del evento (regex activado):
   `^(whatsapp_click|form_start|form_submit|generate_lead|form_error)$`
3. **Etiquetas** → *Nueva* → *Evento de Google Analytics: GA4*
   - Etiqueta de configuración: la existente (`G-BX1MFLCDJH`).
   - Nombre del evento: `{{Event}}` (variable integrada; actívala en *Variables → Configurar*).
   - Parámetros del evento: uno por cada variable del paso 1 (nombre del parámetro = nombre de la variable).
   - Activador: el del paso 2.
4. Probar con *Vista previa* y publicar el contenedor.

## 2. Configuración en GA4 (acción manual)

- **Datos personalizados**: *Administrar → Definiciones personalizadas* → crear dimensiones de evento para `cta_location`, `cta_label`, `service_type` (para verlas en informes).
- **Evento clave**: *Administrar → Eventos* → marcar `generate_lead` como evento clave. **No** marques `whatsapp_click` ni `form_submit` como clave (el primero es solo un clic; marcar los dos últimos duplicaría la conversión).
- **Medición mejorada**: *Administrar → Flujos de datos → (tu flujo) → Medición mejorada → engranaje* → desactivar **Interacciones con formularios**. Si queda activada, GA4 genera por su cuenta `form_start` y `form_submit` cada vez que se toca el botón, aunque la validación falle o el guardado no ocurra, y se mezclan con los eventos propios del sitio.
  - El contenedor GTM publicado incluye esa medición automática de formularios (`ccd_em_form`), por lo que probablemente está activa.
- **`/gracias`**: la página de agradecimiento no mide nada por su cuenta. Si en GTM o Google Ads tenés una conversión basada en visitar `/gracias`, no la mantengas junto con `generate_lead`: contaría dos veces la misma consulta.

## 3. Consentimiento

El sitio **no tiene banner de cookies ni Consent Mode**, y el contenedor GTM no define consentimiento por defecto. Los eventos se envían sin pedir consentimiento. Si más adelante se agrega un banner, hay que configurar Consent Mode en GTM; los eventos del sitio no necesitan cambios.

Por diseño, ningún evento incluye nombre, email, teléfono ni mensaje. Los UTM y el referrer solo viajan al servidor propio (planilla), no a GA4.

## 4. Cómo comprobar que funciona

- **GA4 DebugView**: en GTM, *Vista previa* con la URL de producción; en GA4, *Administrar → DebugView*. Tocar un botón de WhatsApp → debe aparecer `whatsapp_click` con sus parámetros. Enviar el formulario → `form_start`, `form_submit`, `generate_lead`.
- **Informes en tiempo real** de GA4 → *Recuento de eventos por Nombre del evento*.
- **Consola del navegador** (sitio publicado): escribir `dataLayer.filter(e => e.event)` y verificar los eventos.
- **Planilla**: ver `docs/google-sheets-leads.md` (pestañas `Leads` e `Interacciones`).
- Los eventos solo se emiten desde el sitio publicado: ni en desarrollo local ni en previews de Netlify carga GTM.
