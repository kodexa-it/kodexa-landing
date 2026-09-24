import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Trabajos realizados",
  description:
    "Proyectos de desarrollo web, plataformas y sistemas a medida en los que participó Kodexa: sitios institucionales, landings de conversión y plataformas multi-país.",
  alternates: {
    canonical: "/proyectos",
  },
  openGraph: {
    title: "Trabajos realizados | Kodexa",
    description:
      "Proyectos de desarrollo web, plataformas y sistemas a medida en los que participó Kodexa.",
    url: "https://kodexa.ar/proyectos",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trabajos de Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function ProyectosLayout({
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
