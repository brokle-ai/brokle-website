import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ============================================
  // REACT COMPILER (Automatic Memoization)
  // Optimizes client components automatically
  // ============================================
  reactCompiler: true,

  // ============================================
  // IMAGE OPTIMIZATION
  // ============================================
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ============================================
  // PRODUCTION OPTIMIZATIONS
  // ============================================
  compress: true,
  productionBrowserSourceMaps: false,

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
