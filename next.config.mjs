/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    // Enable image optimization
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum quality for optimization
    minimumCacheTTL: 60,
    // Disable image optimization in development if needed (uncomment if dev is slow)
    // unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
  // Reduce JavaScript bundle size
  experimental: {
    optimizePackageImports: ['react-icons', 'aos', 'gsap'],
  },
  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/assets/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
