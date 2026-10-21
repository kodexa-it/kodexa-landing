# Leads del sitio en Google Sheets

Cada consulta enviada desde los formularios se copia como una fila en una planilla de Google.
Forminit sigue recibiendo todo igual (respaldo y avisos por mail).

## 1. Planilla y script
1. Crear una planilla de Google (ej. "Leads Kodexa").
2. Menú **Extensiones → Apps Script**, borrar lo que haya y pegar `google-sheets-leads.gs`.
3. Cambiar `SECRET` por una clave larga propia.
4. **Implementar → Nueva implementación → Aplicación web**
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
5. Autorizar y copiar la URL que termina en `/exec`.

## 2. Netlify
En **Site configuration → Environment variables** (contexto Production):
- `SHEETS_WEBHOOK_URL` = la URL `/exec`
- `SHEETS_WEBHOOK_SECRET` = la misma clave del script

Volver a desplegar (Deploys → Trigger deploy) y enviar una consulta de prueba.
