/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PROTFOLIO',
  assetPrefix: '/PROTFOLIO/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
}

module.exports = nextConfig 