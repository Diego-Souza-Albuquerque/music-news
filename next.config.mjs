/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Configuração para permitir solicitações de qualquer origem (CORS básico)
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "media.licdn.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
