import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Equipo IT para Mantenimiento y Evolución de tu Producto",
  description:
    "Sumá un equipo técnico dedicado a mejorar, mantener y hacer crecer tu sitio, sistema o plataforma de forma continua, sin depender de freelancers sueltos.",

  keywords: [
    "equipo desarrollo web",
    "mantenimiento de software",
    "soporte técnico web",
    "equipo técnico dedicado",
  ],

  alternates: {
    canonical: "/equipo-it",
  },

  openGraph: {
    title: "Equipo IT para Mantenimiento y Evolución de tu Producto | Kodexa",
    description:
      "Equipo técnico dedicado a mejorar, mantener y hacer crecer tu producto digital de forma continua.",
    url: "https://kodexa.ar/equipo-it",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Equipo IT de Kodexa para mantenimiento de productos digitales",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Equipo IT para Mantenimiento y Evolución de tu Producto | Kodexa",
    description:
      "Equipo técnico dedicado a mejorar, mantener y hacer crecer tu producto digital de forma continua.",
    images: ["/og-image2.png"],
  },
};

export default function EquipoLayout({
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