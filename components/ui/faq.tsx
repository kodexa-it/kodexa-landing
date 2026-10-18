import { Plus } from "./icons"
import type { FaqItem } from "@/lib/content/services"

/** Acordeón nativo con <details>: accesible por teclado sin JavaScript. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium tracking-[-0.015em] [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-open:rotate-45 group-open:bg-brand group-open:border-brand">
              <Plus width={16} height={16} />
            </span>
          </summary>
          <p className="max-w-2xl pb-6 pr-12 text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
