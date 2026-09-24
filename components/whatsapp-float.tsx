"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BitmapChevron } from "@/components/bitmap-chevron";

const whatsappLink =
  "https://wa.me/5491167470473?text=" +
  encodeURIComponent(
    "Hola Kodexa! Estuve viendo su web y me gustaría hablar sobre un proyecto.",
  );

export function WhatsAppFloat() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { y: 40, opacity: 0 });

    const onScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 50) {
        // 👈 estás en el top
        gsap.to(el, {
          y: 40,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // 👇 ya bajaste
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      ref={ref}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 border border-accent/40 bg-background/90 backdrop-blur px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all duration-300 shadow-lg"
    >
      WhatsApp
      <BitmapChevron className="transition-transform duration-300 group-hover:rotate-45" />
      <span className="absolute right-full mr-4 whitespace-nowrap bg-background border border-border/40 px-3 py-2 text-[10px] text-muted-foreground opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        ¿Hablamos?
      </span>
    </a>
  );
}
