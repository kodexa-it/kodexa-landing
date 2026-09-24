"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Trabajos", href: "/proyectos" },
  { label: "Productos", href: "/productos" },
  { label: "Sumar equipo IT", href: "/#equipo-it" },
  { label: "Contacto", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${open ? "bg-black border-b border-white/10" : scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-white font-semibold text-lg">
          Kodexa
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5491167470473"
          target="_blank"
          className="hidden md:inline-block bg-orange-500 text-black px-5 py-2 text-xs uppercase hover:scale-105 transition"
        >
          WhatsApp
        </a>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="md:hidden text-white p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="md:hidden px-6 pb-6 flex flex-col gap-1 text-gray-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-white/10 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5491167470473"
            target="_blank"
            className="mt-4 bg-orange-500 text-black px-5 py-3 text-xs uppercase text-center"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
