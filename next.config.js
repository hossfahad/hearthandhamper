/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/hearthandhamper',
  assetPrefix: '/hearthandhamper/',
}

module.exports = nextConfig 