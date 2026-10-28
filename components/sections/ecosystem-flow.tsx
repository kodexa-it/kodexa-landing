"use client"

import { Link } from "@/components/i18n/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "@/components/ui/icons"
import { useT } from "@/lib/i18n/client"
import { ECO_SCENES, EcosystemShowcase } from "@/components/visuals/ecosystem-showcase"

/** Pasos del ecosistema sincronizados con la animación de equipos. */
export function EcosystemFlow() {
  const { t } = useT()
  const steps = t.raw<{ app: string; title: string; text: string; href: string; link: string }[]>("ecoflow.steps")
  const [step, setStep] = useState(0)
  const [n, setN] = useState(0)
  const go = (i: number) => {
    if (i === step) return
    setStep(i)
    setN((x) => x + 1)
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
      <ol className="order-2 flex min-w-0 flex-col gap-2.5 lg:order-1" aria-label={t("ecoflow.aria")}>
        {steps.map((s, i) => {
          const active = step === i
          return (
            <li key={s.app}>
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border transition-colors duration-500",
                  active ? "border-white/20 bg-white/[0.09]" : "border-transparent hover:bg-white/[0.04]",
                )}
              >
                <button type="button" onClick={() => go(i)} aria-pressed={active} className="flex w-full items-start gap-4 p-5 text-left">
                  <span className={cn("t-label mt-1 transition-colors", active ? "text-brand-soft" : "text-white/40")}>0{i + 1}</span>
                  <span className="min-w-0">
                    <span className={cn("block text-sm font-medium transition-colors", active ? "text-brand-soft" : "text-white/50")}>{s.app}</span>
                    <span className={cn("mt-0.5 block text-xl font-medium tracking-[-0.02em] transition-colors", active ? "text-white" : "text-white/70")}>{s.title}</span>
                    <span
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <span className="overflow-hidden">
                        <span className="mt-2 block text-[0.95rem] leading-relaxed text-white/65">{s.text}</span>
                      </span>
                    </span>
                  </span>
                </button>
                {active && (
                  <Link href={s.href} className="group -mt-2 mb-4 ml-[3.45rem] inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-brand-soft">
                    {s.link}
                    <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
                {active && (
                  <span
                    key={`${i}-${n}`}
                    aria-hidden="true"
                    className="eco-progress absolute bottom-0 left-0 h-[2px] bg-brand"
                    style={{ animationDuration: `${ECO_SCENES[i].ms}ms` }}
                  />
                )}
              </div>
            </li>
          )
        })}
      </ol>

      <div className="order-1 min-w-0 lg:order-2 lg:-mr-10">
        <EcosystemShowcase step={step} onStepChange={setStep} nav={false} />
      </div>
    </div>
  )
}
