type ArticleSchemaProps = {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
};

export function ArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "es-AR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: "Lautaro Aquino",
      url: "https://kodexa.ar",
      jobTitle: "Founder",
    },
    publisher: {
      "@type": "Organization",
      name: "Kodexa",
      url: "https://kodexa.ar",
      logo: {
        "@type": "ImageObject",
        url: "https://kodexa.ar/favicon.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
