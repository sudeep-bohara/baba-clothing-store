import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // All assets are local, pre-sized JPEGs; keep the optimizer conservative.
    formats: ["image/webp"],
    qualities: [60, 75],
    deviceSizes: [360, 420, 640, 828, 1080, 1280, 1600, 1920],
  },
};

export default nextConfig;
