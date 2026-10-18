"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const chip =
  "inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-white"

export function ArticleShare({ title, storyImage }: { title: string; storyImage: string }) {
  const [copied, setCopied] = useState(false)
  const [igOpen, setIgOpen] = useState(false)
  const [url, setUrl] = useState("")

  useEffect(() => setUrl(window.location.href), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* portapapeles no disponible */
    }
  }

  return (
    <div className="border-t border-line pt-10">
      <p className="t-label text-ink-faint">Compartir</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a className={chip} target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}>LinkedIn</a>
        <a className={chip} target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}>X</a>
        <a className={chip} target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}>WhatsApp</a>
        <button type="button" className={chip} onClick={copy}>{copied ? "Enlace copiado ✓" : "Copiar enlace"}</button>
        <button type="button" className={chip} aria-expanded={igOpen} onClick={() => setIgOpen((v) => !v)}>Compartir en Instagram</button>
      </div>

      {igOpen && (
        <div className="glass mt-6 flex flex-col items-start gap-6 p-6 md:flex-row md:p-8">
          <div className="relative aspect-[9/16] w-28 shrink-0 overflow-hidden rounded-xl border border-line">
            <Image src={storyImage} alt="Vista previa de la imagen para Instagram Stories" fill sizes="112px" className="object-cover" />
          </div>
          <div>
            <p className="text-ink-soft">
              Instagram no genera una vista previa de este enlace en las Stories. Preparamos una imagen vertical lista para usar: descargala, subila a tu Story y agregá el link del artículo.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={storyImage} download className="inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-ink">Descargar imagen para Story</a>
              <Button type="button" variant="secondary" className="!px-5 !py-2.5 text-sm" onClick={copy}>
                {copied ? "Enlace copiado ✓" : "Copiar enlace del artículo"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
