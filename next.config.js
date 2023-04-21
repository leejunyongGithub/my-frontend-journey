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
  async rewrites() {
    return [
      {
        source: '/posts/:slug',
        destination: '/post/:slug',
      },
    ]
  },
};

module.exports = nextConfig;
