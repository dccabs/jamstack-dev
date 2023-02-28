/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    minimumCacheTTL: 60,
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com", "images.ctfassets.net"],
  },
};

module.exports = nextConfig;
