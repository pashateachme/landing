const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/landing/" : undefined,
  basePath: isProd ? "/landing" : undefined,
  images: { unoptimized: true },
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
