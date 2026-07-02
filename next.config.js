/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['163.245.212.84', 'http://163.245.212.84:3001'],
  turbopack: {
    root: __dirname,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ADD THIS: Fixes 404s on Cloudflare Pages static exports
  trailingSlash: true,
};

module.exports = nextConfig;
