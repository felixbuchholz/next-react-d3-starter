/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProduction ? '/next-react-d3-starter/' : '',
}

module.exports = nextConfig
