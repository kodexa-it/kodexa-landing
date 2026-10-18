import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/content/products"

/** Isotipo del producto si existe; si no, sus iniciales. */
export function ProductBadge({ product, className, tone = "dark" }: { product: Product; className?: string; tone?: "dark" | "light" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl text-sm font-semibold",
        product.logo ? "bg-white shadow-[0_0_0_1px_rgb(32_33_36/0.08)]" : tone === "dark" ? "bg-ink text-white" : "bg-white text-ink",
        className,
      )}
    >
      {product.logo ? <Image src={product.logo} alt="" width={48} height={48} className="h-full w-full object-contain p-1.5" /> : product.badge}
    </span>
  )
}
