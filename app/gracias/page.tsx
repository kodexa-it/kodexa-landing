import type { Metadata } from "next"
import { ButtonLink } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Gracias por tu mensaje",
  description: "Recibimos tu proyecto. Te respondemos dentro de las próximas 24 horas.",
  alternates: { canonical: "/gracias" },
  robots: { index: false, follow: true },
}

export default function GraciasPage() {
  return (
    <section className="atmosphere grain relative grid min-h-[80vh] place-items-center overflow-hidden px-5 pb-20 pt-36 text-center">
      <div className="glass max-w-2xl p-10 md:p-16">
        <Eyebrow className="justify-center">Mensaje enviado</Eyebrow>
        <h1 className="t-h1 mt-6">Recibimos tu proyecto.</h1>
        <p className="t-lead mx-auto mt-6 max-w-lg">
          Gracias por confiar en Kodexa. Vamos a analizar lo que nos contaste y a responderte con una propuesta clara dentro de las próximas 24 hs.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Volver al inicio</ButtonLink>
          <ButtonLink href="/proyectos" variant="secondary">Ver proyectos</ButtonLink>
        </div>
      </div>
    </section>
  )
}
