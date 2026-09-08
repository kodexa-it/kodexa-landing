"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const techCategories = [
  {
    label: "Frontend",
    items: ["Next.js", "Astro", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS"],
  },
  {
    label: "Deploy",
    items: ["Vercel", "Netlify"],
  },
]

export function TechSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.fromTo(
          columns,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / Stack</span>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-tight">TECHNOLOGY</h2>
        <p className="mt-6 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          Trabajamos con tecnologías modernas que garantizan rendimiento y escalabilidad.
        </p>
      </div>

      {/* Tech grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {techCategories.map((category, index) => (
          <div key={index} className="border border-border/40 p-8">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent mb-6">
              {category.label}
            </h4>
            <ul className="space-y-4">
              {category.items.map((item, i) => (
                <li key={i} className="group flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/40 group-hover:bg-accent transition-colors duration-300" />
                  <span className="font-[family-name:var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
