import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages - ลบ basePath ถ้าใช้ user.github.io
  // basePath: "/ekromnetvpn",
};

export default nextConfig;
