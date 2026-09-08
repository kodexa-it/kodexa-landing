import Link from "next/link";

type Crumb = {
  name: string;
  href?: string;
};

export function BreadcrumbNav({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="relative px-6 md:px-28 pt-24">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-white transition">
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-300">{item.name}</span>
            )}
            {index < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
