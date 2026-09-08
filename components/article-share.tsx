"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function ArticleShare({
  title,
  storyImage,
}: {
  title: string;
  storyImage: string;
}) {
  const [copied, setCopied] = useState(false);
  const [igOpen, setIgOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard no disponible; no hacemos nada silenciosamente incorrecto
    }
  };

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;

  return (
    <div className="border-t border-white/10 pt-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
        Compartir
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 px-5 py-2.5 text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
        >
          LinkedIn
        </a>
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 px-5 py-2.5 text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
        >
          X
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 px-5 py-2.5 text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
        >
          WhatsApp
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="border border-white/20 px-5 py-2.5 text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
        >
          {copied ? "Enlace copiado ✓" : "Copiar enlace"}
        </button>
        <button
          type="button"
          onClick={() => setIgOpen((v) => !v)}
          className="border border-accent/40 px-5 py-2.5 text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition"
        >
          Compartir en Instagram
        </button>
      </div>

      {igOpen && (
        <div className="mt-6 border border-white/10 rounded-xl p-6 md:p-8 bg-white/[0.02] flex flex-col md:flex-row gap-6 items-start">
          <div className="relative w-28 shrink-0 aspect-[9/16] rounded-md overflow-hidden border border-white/10">
            <Image
              src={storyImage}
              alt="Vista previa de la imagen para Instagram Stories"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Instagram no genera una vista previa de este enlace en las
              Stories. Preparamos una imagen vertical lista para usar:
              descargala, subila a tu Story y agregá el link del artículo.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={storyImage}
                download
                className="inline-block bg-accent text-black px-5 py-2.5 text-xs uppercase tracking-widest hover:scale-[1.02] transition"
              >
                Descargar imagen para Story
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="border border-white/20 px-5 py-2.5 text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
              >
                {copied ? "Enlace copiado ✓" : "Copiar enlace del artículo"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
