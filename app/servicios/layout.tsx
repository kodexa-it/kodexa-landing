import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Servicios de Desarrollo Web y Software a Medida",
  description:
    "Landing pages, sitios institucionales, sistemas web a medida y desarrollo a medida para plataformas y productos digitales. Conocé nuestros servicios y precios.",

  keywords: [
    "servicios de desarrollo web",
    "desarrollo de páginas web",
    "desarrollo de software a medida",
    "desarrollo de sistemas web",
    "precio desarrollo web",
    "landing pages profesionales",
  ],

  alternates: {
    canonical: "/servicios",
  },

  openGraph: {
    title: "Servicios de Desarrollo Web y Software a Medida | Kodexa",
    description:
      "Landing pages, sitios institucionales, sistemas web y desarrollo a medida de plataformas digitales. Conocé nuestros servicios y precios.",
    url: "https://kodexa.ar/servicios",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Servicios de desarrollo web y software a medida de Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Servicios de Desarrollo Web y Software a Medida | Kodexa",
    description:
      "Landing pages, sitios institucionales, sistemas web y desarrollo a medida de plataformas digitales.",
    images: ["/og-image2.png"],
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}