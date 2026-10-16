import { whatsappHref } from "@/lib/content/site"
import { Whatsapp } from "@/components/ui/icons"

const href = whatsappHref("Hola Kodexa! Estuve viendo su web y me gustaría hablar sobre un proyecto.")

export function WhatsappFloat() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Kodexa por WhatsApp"
      className="glass glass-lift fixed bottom-5 right-4 z-40 grid h-14 w-14 place-items-center rounded-full text-ink md:bottom-7 md:right-7 md:h-auto md:w-auto md:grid-flow-col md:gap-2.5 md:px-5 md:py-3.5"
    >
      <Whatsapp width={22} height={22} />
      <span className="hidden text-sm font-medium md:inline">WhatsApp</span>
      <span aria-hidden="true" className="pulse-dot absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-brand md:right-2 md:top-2" />
    </a>
  )
}
