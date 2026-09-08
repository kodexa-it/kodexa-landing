import Link from "next/link";

type RelatedLink = {
  label: string;
  description: string;
  href: string;
};

export function RelatedLinks({
  title = "Servicios relacionados",
  items,
}: {
  title?: string;
  items: RelatedLink[];
}) {
  return (
    <div className="mt-40 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-bebas)] text-center">
        {title}
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block border border-white/10 rounded-xl p-6 bg-white/[0.02] hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300"
          >
            <h3 className="text-lg font-semibold group-hover:text-accent transition">
              {item.label}
            </h3>
            <p className="mt-2 text-sm text-gray-500">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
