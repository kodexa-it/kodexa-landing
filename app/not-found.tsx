import { ButtonLink } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/section"

export default function NotFound() {
  return (
    <section className="atmosphere grid min-h-[80vh] place-items-center px-5 pb-20 pt-36 text-center">
      <div>
        <Eyebrow className="justify-center">Error 404</Eyebrow>
        <h1 className="t-h1 mt-6">Esta página no existe.</h1>
        <p className="t-lead mx-auto mt-5 max-w-md">Puede que el enlace haya cambiado. Volvé al inicio o explorá nuestros servicios.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Ir al inicio</ButtonLink>
          <ButtonLink href="/servicios" variant="secondary">Ver servicios</ButtonLink>
        </div>
      </div>
    </section>
  )
}
