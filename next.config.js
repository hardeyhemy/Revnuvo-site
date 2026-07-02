/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow HMR to work when accessing the dev server via the external IP
  allowedDevOrigins: ['163.245.212.84', 'http://163.245.212.84:3001'],
  
  // Explicitly set the root directory for Turbopack
  turbopack: {
    root: __dirname,
  },

  // ADD THIS: Tells Next.js to build pure static HTML/CSS/JS
  output: 'export',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
