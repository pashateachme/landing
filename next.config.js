const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  ...(isProd
    ? {
        assetPrefix: "/landing/",
        basePath: "/landing",
      }
    : {}),
};

module.exports = nextConfig;
