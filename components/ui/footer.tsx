"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 pt-10 pb-10 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* MARCA */}
          <div>
            <h3 className="text-xl font-semibold">Kodexa</h3>

            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Equipo de desarrollo web enfocado en crear, mejorar y escalar productos digitales.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/kodexa.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/10 rounded-lg hover:bg-white hover:text-black transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* NAVEGACION */}
          <div>
            <p className="text-sm font-semibold mb-4">Navegación</p>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/equipo-it" className="hover:text-white transition relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                  Equipo IT
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-white transition relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="hover:text-white transition relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICIOS */}
          <div>
            <p className="text-sm font-semibold mb-4">Servicios</p>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/servicios/desarrollo-web" className="hover:text-white transition">
                  Desarrollo web
                </Link>
              </li>
              <li>
                <Link href="/servicios/software-a-medida" className="hover:text-white transition">
                  Software a medida
                </Link>
              </li>
              <li>
                <Link href="/servicios/plataformas-digitales" className="hover:text-white transition">
                  Plataformas digitales
                </Link>
              </li>
              <li>
                <Link href="/servicios/mvp" className="hover:text-white transition">
                  MVP y SaaS
                </Link>
              </li>
              <li>
                <Link href="/equipo-it" className="hover:text-white transition">
                  Mantenimiento continuo
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm font-semibold mb-4">Contacto</p>

            <p className="text-sm text-gray-400">
              ¿Querés mejorar tu producto?
            </p>

            <a
              href="https://wa.me/5491167470473"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-orange-500 text-black px-5 py-3 text-xs uppercase hover:scale-105 hover:shadow-[0_0_20px_rgba(255,115,0,0.4)] transition font-medium"
            >
              WhatsApp
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Kodexa. Todos los derechos reservados.
          </p>

          <p className="text-xs text-gray-500">
            Desarrollo web moderno, enfocado en resultados.
          </p>

        </div>

      </div>
    </footer>
  );
}