import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove basePath to serve app from root
  trailingSlash: true,
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'encrypted-tbn0.gstatic.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
