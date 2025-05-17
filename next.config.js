/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'uss-gabon.com', 'uss-storage.supabase.co'],
  },
}

module.exports = nextConfig
