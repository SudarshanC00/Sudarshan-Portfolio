/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/Sudarshan-Portfolio',
  basePath: '/Sudarshan-Portfolio'
}

module.exports = nextConfig
