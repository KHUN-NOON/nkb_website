/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'mm'],
    defaultLocale: 'en-US',
    localeDetection: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'scontent-sin6-2.xx.fbcdn.net'
      }
    ]
  }
}

module.exports = nextConfig
