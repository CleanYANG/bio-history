import type { NextConfig } from "next";

const nextConfig: NextConfig = process.env.VERCEL
  ? {}
  : {
      distDir: "build",
    };

export default nextConfig;
