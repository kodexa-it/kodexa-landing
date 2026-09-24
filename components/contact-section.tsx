"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Forminit } from "forminit";
import { trackEvent } from "@/lib/analytics";
import type { LeadType, ProductInterest } from "@/lib/products";

const forminit = new Forminit({
  proxyUrl: "/api/forminit",
});

gsap.registerPlugin(ScrollTrigger);

const PRODUCT_TYPE = "Producto Kodexa (Nexo / Nodo)";

// Tipo de proyecto (visible) → leadType (campo oculto para segmentar consultas)
const projectTypes: { label: string; leadType: LeadType }[] = [
  { label: "Sitio web o Landing Page", leadType: "web" },
  { label: "Software o Sistema a Medida", leadType: "software" },
  { label: "Plataforma o Aplicación Web", leadType: "software" },
  { label: "MVP o Producto SaaS", leadType: "software" },
  { label: PRODUCT_TYPE, leadType: "product" },
  { label: "Soporte y Equipo IT", leadType: "other" },
];

const productInterests: { label: string; value: ProductInterest }[] = [
  { label: "Nexo — asistente digital", value: "nexo" },
  { label: "Nodo — CRM", value: "nodo" },
  { label: "Nexo + Nodo", value: "bundle" },
  { label: "Todavía no sé cuál", value: "unknown" },
];

const budgetRanges = [
  "Menos de USD 500",
  "USD 500 – 1.500",
  "USD 1.500 – 5.000",
  "Más de USD 5.000 / A definir",
];

type ContactSectionProps = {
  /** "general" = consulta de proyecto (Home). "product" = interés en Nexo/Nodo. */
  variant?: "general" | "product";
  /** Identifica desde qué página/sección se envió (ej: "home", "productos-nexo"). */
  source?: string;
  defaultProductInterest?: ProductInterest;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  submitLabel?: string;
};

export function ContactSection({
  variant = "general",
  source = "home",
  defaultProductInterest = "unknown",
  eyebrow = "09 / Contacto",
  title = (
    <>
      ¿TENÉS UN PROYECTO <span className="text-accent">EN MENTE</span>?
    </>
  ),
  description = "Contanos qué necesitás y vemos cómo podemos ayudarte a convertirlo en una solución digital.",
  submitLabel = "Hablemos de tu proyecto",
}: ContactSectionProps = {}) {
  const isProduct = variant === "product";
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    "fi-sender-fullName": "",
    "fi-sender-email": "",
    "fi-select-projectType": "",
    "fi-select-budget": "",
    "fi-text-message": "",
  });
  const [productInterest, setProductInterest] = useState<ProductInterest>(
    defaultProductInterest
  );

  const leadType: LeadType = isProduct
    ? "product"
    : (projectTypes.find(
        (t) => t.label === formData["fi-select-projectType"]
      )?.leadType ?? "other");

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 90%",
            },
          }
        );
      }

      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      setIsSubmitting(true);

      const { error } = await forminit.submit("920afmph8yf", formData);

      if (error) throw new Error();

      trackEvent("lead_form_submit", {
        source,
        leadType,
        productInterest: isProduct ? productInterest : null,
      });

      window.location.href = "/gracias";
    } catch {
      setError("Ocurrió un error. Intentá nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 md:px-12 border-t border-border/30"
    >
      {/* HEADER */}
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center mb-20"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
          {eyebrow}
        </span>

        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight">
          {title}
        </h2>

        <p className="mt-8 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* FORM CARD */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative max-w-4xl mx-auto p-8 md:p-10 rounded-2xl
        bg-background/40 backdrop-blur-xl
        border border-border/50
        shadow-[0_0_40px_rgba(0,0,0,0.6)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Campos ocultos para segmentar y medir consultas */}
          <input type="hidden" name="fi-text-leadType" value={leadType} />
          <input type="hidden" name="fi-text-source" value={source} />
          {isProduct && (
            <>
              <input
                type="hidden"
                name="fi-text-productInterest"
                value={productInterest}
              />
              <input
                type="hidden"
                name="fi-select-projectType"
                value={PRODUCT_TYPE}
              />
            </>
          )}

          {/* NOMBRE */}
          <div className="space-y-2">
            <label className="label">Nombre</label>
            <input
              type="text"
              name="fi-sender-fullName"
              required
              value={formData["fi-sender-fullName"]}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="input"
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="label">Email</label>
            <input
              type="email"
              name="fi-sender-email"
              required
              value={formData["fi-sender-email"]}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="input"
            />
          </div>

          {isProduct ? (
            /* INTERÉS EN PRODUCTO */
            <div className="space-y-2 md:col-span-2">
              <label className="label">Me interesa</label>
              <select
                value={productInterest}
                onChange={(e) =>
                  setProductInterest(e.target.value as ProductInterest)
                }
                className="input cursor-pointer"
              >
                {productInterests.map((p) => (
                  <option key={p.value} value={p.value} className="bg-card">
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <>
          {/* TIPO */}
          <div className="space-y-2">
            <label className="label">Tipo de proyecto</label>
            <select
              name="fi-select-projectType"
              required
              value={formData["fi-select-projectType"]}
              onChange={handleChange}
              className={cn(
                "input cursor-pointer",
                !formData["fi-select-projectType"] &&
                  "text-muted-foreground/40"
              )}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              {projectTypes.map(({ label }) => (
                <option key={label} value={label} className="bg-card">
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* PRESUPUESTO */}
          <div className="space-y-2">
            <label className="label">
              Presupuesto aproximado (opcional)
            </label>
            <select
              name="fi-select-budget"
              value={formData["fi-select-budget"]}
              onChange={handleChange}
              className={cn(
                "input cursor-pointer",
                !formData["fi-select-budget"] &&
                  "text-muted-foreground/40"
              )}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range} className="bg-card">
                  {range}
                </option>
              ))}
            </select>
          </div>

            </>
          )}

          {/* MENSAJE */}
          <div className="space-y-2 md:col-span-2">
            <label className="label">Mensaje</label>
            <textarea
              name="fi-text-message"
              required
              rows={5}
              value={formData["fi-text-message"]}
              onChange={handleChange}
              placeholder={
                isProduct
                  ? "Contanos qué te gustaría resolver en tu negocio..."
                  : "Contanos qué necesitás construir y tu idea..."
              }
              className="input min-h-[140px] resize-none"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="md:col-span-2 w-full
            bg-accent text-black
            py-4 font-mono text-xs uppercase tracking-widest
            rounded-md
            shadow-[0_0_20px_rgba(255,115,0,0.3)]
            hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
            hover:scale-[1.01]
            transition-all duration-200
            disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : submitLabel}
          </button>

          {/* ERROR */}
          {error && (
            <p className="md:col-span-2 text-center text-red-500 text-xs font-mono uppercase">
              {error}
            </p>
          )}

          {/* FOOTER */}
          <p
            ref={footerRef}
            className="md:col-span-2 text-center text-muted-foreground text-xs font-mono uppercase"
          >
            Te respondemos dentro de 24 hs.
          </p>
        </div>
      </form>
    </section>
  );
}