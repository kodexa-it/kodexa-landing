import { Link } from "@/components/i18n/link"
import { Fragment } from "react"

/**
 * Texto con marcas mínimas para los mensajes: `[etiqueta](/ruta)` → enlace interno (con idioma) y `**texto**` → negrita.
 * Evita guardar HTML/JSX dentro de los archivos de mensajes.
 */
export function RichText({ text, linkClassName = "font-medium" }: { text: string; linkClassName?: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) {
          return (
            <Link key={i} href={link[2]} className={linkClassName}>
              {link[1]}
            </Link>
          )
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/)
        if (bold) return <strong key={i}>{bold[1]}</strong>
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
