export function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Kodexa",
      url: "https://kodexa.ar",
      logo: "https://kodexa.ar/favicon.png",
      description:
        "Estudio de producto digital especializado en desarrollo web, software a medida, plataformas digitales, MVPs y productos SaaS.",
      founder: {
        "@type": "Person",
        name: "Lautaro Aquino",
      },
      sameAs: [
        "https://www.linkedin.com/in/lautaro-aquino-007a1625b/",
        "https://www.instagram.com/kodexa.it/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Kodexa",
      url: "https://kodexa.ar",
      inLanguage: "es-AR",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Kodexa",
      url: "https://kodexa.ar",
      image: "https://kodexa.ar/og-image.png",
      founder: {
        "@type": "Person",
        name: "Lautaro Aquino",
      },
      areaServed: [{ "@type": "Country", name: "Argentina" }, "Worldwide"],
      serviceType: [
        "Desarrollo web",
        "Desarrollo de software a medida",
        "Desarrollo de sistemas web",
        "Plataformas y aplicaciones web",
        "Desarrollo de MVP",
        "Desarrollo de productos SaaS",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo Web",
            url: "https://kodexa.ar/servicios/desarrollo-web",
            description:
              "Sitios y landing pages diseñados para convertir visitas en clientes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software y Sistemas a Medida",
            url: "https://kodexa.ar/servicios/software-a-medida",
            description:
              "Sistemas adaptados a los procesos reales de tu empresa para centralizar y automatizar operaciones.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plataformas y Aplicaciones Web",
            url: "https://kodexa.ar/servicios/plataformas-digitales",
            description:
              "Plataformas y aplicaciones web con paneles de gestión y arquitectura preparada para escalar.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MVP y Productos SaaS",
            url: "https://kodexa.ar/servicios/mvp",
            description:
              "Desarrollo de productos digitales desde cero para validar y lanzar nuevos negocios.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Lautaro Aquino",
      url: "https://kodexa.ar",
      jobTitle: "Founder & Web Developer",
      worksFor: {
        "@type": "Organization",
        name: "Kodexa",
      },
      sameAs: [
        "https://www.linkedin.com/in/lautaro-aquino-007a1625b/",
        "https://www.instagram.com/kodexa.it/",
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
