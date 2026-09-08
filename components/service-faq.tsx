type FaqItem = {
  question: string;
  answer: string;
};

export function ServiceFaq({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-40 max-w-4xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs text-gray-400 uppercase tracking-widest">FAQ</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-[family-name:var(--font-bebas)]">
          Preguntas frecuentes
        </h2>
      </div>

      <div className="mt-16 space-y-8">
        {items.map((item) => (
          <div
            key={item.question}
            className="border-b border-white/10 pb-8 last:border-0"
          >
            <h3 className="text-lg md:text-xl font-semibold">
              {item.question}
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FaqSchema({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
