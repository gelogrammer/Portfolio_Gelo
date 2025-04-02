/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Required for static exports
  },
  // Indicate that the site will be deployed on Cloudflare Pages
  experimental: {
    isrMemoryCacheSize: 0, // Disable ISR caching
  },
}

module.exports = nextConfig 