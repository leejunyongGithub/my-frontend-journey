/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    disableStaticImages: true,
    domains: ["webtlify.kr"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
