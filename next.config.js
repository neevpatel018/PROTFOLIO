/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PROTFOLIO',
  assetPrefix: '/PROTFOLIO/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 