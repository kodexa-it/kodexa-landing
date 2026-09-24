/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/proyectos/nexo",
        destination: "/productos/nexo",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
