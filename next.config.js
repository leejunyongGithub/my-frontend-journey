/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
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

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
    // If you use `MDXProvider`, uncomment the following line.
  },
});
module.exports = withMDX(nextConfig);
