/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    emailjsPublicKey: 'YF9qKtN1sQDN8Ls3F',
    emailjsServiceId: 'service_nz0ro9j',
    emailjsTemplateId: 'template_tfjogrl',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    minimumCacheTTL: 60,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  trailingSlash: true,
  eslint: {
    // Ignore ESLint errors during the build process
    ignoreDuringBuilds: true,
  },
  // Add optimization options
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  // Enable React Strict Mode for better development experience and future compatibility
  reactStrictMode: true,
};

module.exports = nextConfig;
