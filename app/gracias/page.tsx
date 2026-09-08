import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gracias por tu mensaje",
  description: "Recibimos tu proyecto. Te respondemos dentro de las próximas 24 horas.",
  alternates: {
    canonical: "/gracias",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function GraciasPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background overflow-hidden">
      
      {/* Background subtle grid / line effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">
          07 / Submission Confirmed
        </span>

        <h1 className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl tracking-tight leading-none">
          PROJECT
          <br />
          <span className="text-accent">RECEIVED</span>
        </h1>

        <p className="mt-10 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          Gracias por confiar en Kodexa.  
          Ya recibí tu mensaje y voy a analizar tu proyecto para responderte
          con una propuesta clara y estructurada dentro de las próximas 24 hs.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6">
          <a
            href="/"
            className="border border-border/40 px-8 py-4 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-200"
          >
            Volver al inicio
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border/40 px-8 py-4 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-200"
          >
            Conectar en LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}