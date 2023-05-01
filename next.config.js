/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['www.notion.so', 's3.us-west-2.amazonaws.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
