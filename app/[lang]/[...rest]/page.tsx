import { notFound } from "next/navigation"

/** Cualquier ruta sin página propia cae acá → 404 localizado (app/[lang]/not-found.tsx). */
export default function CatchAll() {
  notFound()
}
