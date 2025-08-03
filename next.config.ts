import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone output only for Docker/self-hosted deployments
  // Vercel and Netlify handle this automatically
  output: process.env.DOCKER_BUILD === 'true' ? 'standalone' : undefined,
  images: {
    domains: [
      'localhost', 
      'media.licdn.com',                  // ✅ LinkedIn images
      'avatars.githubusercontent.com',    // ✅ GitHub avatars
      'cdn.instagram.com'                 // ✅ Instagram (if needed)
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    // optimizeCss: true, // Disabled for now due to critters dependency issues
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
