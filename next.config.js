/** @type {import('next').NextConfig} */

const path = require('path');

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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: "/posts/:slug",
        destination: "/post/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
