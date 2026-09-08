import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Productos digitales propios y proyectos de desarrollo web en los que participó Kodexa: sistemas, plataformas y sitios institucionales.",
  alternates: {
    canonical: "/proyectos",
  },
  openGraph: {
    title: "Proyectos | Kodexa",
    description:
      "Productos digitales propios y proyectos de desarrollo web en los que participó Kodexa.",
    url: "https://kodexa.ar/proyectos",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Proyectos de Kodexa",
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
