/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { domains: ['cdn.dooca.store'] },
}

module.exports = nextConfig
