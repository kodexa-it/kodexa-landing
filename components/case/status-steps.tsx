import { getT } from "@/lib/i18n/server"

type Step = { t: string; s: "done" | "progress" | "pending" }

/** Etapa 5: estado del proyecto. Sin fechas ni métricas: solo en qué punto está. El estado se comunica con texto, no solo con color. */
export async function StatusSteps() {
  const { t } = await getT()
  const steps = t.raw<Step[]>("caso.s5.steps")
  return (
    <div>
      <p className="t-label text-ink-faint">{t("caso.s5.stepsLabel")}</p>
      <ol className="mt-5 grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-4">
        {steps.map((st, i) => (
          <li key={st.t} className="bg-paper p-5" aria-current={st.s === "progress" ? "step" : undefined}>
            <span className="t-label text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-3 font-medium text-ink">{st.t}</p>
            <p className={`mt-2 inline-flex items-center gap-2 text-sm ${st.s === "pending" ? "text-ink-faint" : "text-ink-soft"}`}>
              <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${st.s === "done" ? "bg-ink" : st.s === "progress" ? "bg-brand" : "border border-ink-faint"}`} />
              {t(`caso.s5.status.${st.s}`)}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
