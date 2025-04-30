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
  },
  trailingSlash: true,
}

module.exports = nextConfig 