import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages - ลบ basePath ถ้าใช้ user.github.io
  basePath: "/Web", // For EkromSSH.github.io/Web
};

export default nextConfig;
