"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { nav, whatsappHref } from "@/lib/content/site"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { ButtonLink } from "@/components/ui/button"
import { Close, Menu, Whatsapp } from "@/components/ui/icons"
import { WhatsappLink } from "@/components/ui/whatsapp-link"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={cn(
          "glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-5 pr-2 transition-shadow duration-500",
          scrolled && "!shadow-[var(--shadow-lift)]",
        )}
      >
        <Link href="/" aria-label="Kodexa — inicio" className="rounded-full">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[0.92rem] lg:px-4 font-medium tracking-[-0.01em] transition-colors",
                  active ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand transition-all duration-300",
                    active ? "opacity-100" : "scale-0 opacity-0",
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsappLink
            message="Hola Kodexa! Quiero hablar sobre un proyecto."
            cta={{ location: "navbar", label: "navbar_icon" }}
            aria-label="Escribir a Kodexa por WhatsApp"
            className="hidden h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:grid"
          >
            <Whatsapp width={20} height={20} />
          </WhatsappLink>
          <ButtonLink href="/contacto" className="hidden px-5 py-3 md:inline-flex" event="cta_click" eventProps={{ location: "header" }}>
            Hablemos
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="glass mx-auto mt-2 max-w-6xl p-3 md:hidden">
          <nav aria-label="Móvil" className="flex flex-col">
            {[{ label: "Inicio", href: "/" }, ...nav, { label: "Contacto", href: "/contacto" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium tracking-[-0.02em] transition-colors hover:bg-ink/5"
              >
                {item.label}
                {pathname === item.href && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href={whatsappHref("Hola Kodexa! Quiero hablar sobre un proyecto.")}
            className="mt-2 w-full"
            whatsapp={{ location: "navbar", label: "navbar_mobile" }}
          >
            <Whatsapp width={18} height={18} /> Escribir por WhatsApp
          </ButtonLink>
          <ButtonLink href="/contacto" variant="secondary" className="mt-2 w-full">
            Enviar una consulta
          </ButtonLink>
        </div>
      )}
    </header>
  )
}
