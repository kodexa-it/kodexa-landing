import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Notas desde adentro de Kodexa: decisiones reales de producto, arquitectura y desarrollo que tomamos mientras construimos software.",
  alternates: {
    canonical: "/recursos",
  },
  openGraph: {
    title: "Recursos | Kodexa",
    description:
      "Notas desde adentro de Kodexa: decisiones reales de producto, arquitectura y desarrollo.",
    url: "https://kodexa.ar/recursos",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Recursos de Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RecursosLayout({
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
