/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
  },
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
}

export default nextConfig 