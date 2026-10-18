/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Redirect heredado de kodexa.ar. Todas las demás URLs públicas se conservan sin cambios.
  async redirects() {
    return [{ source: "/proyectos/nexo", destination: "/productos/nexo", permanent: true }]
  },
}

export default nextConfig
