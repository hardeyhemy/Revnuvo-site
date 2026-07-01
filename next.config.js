/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow HMR to work when accessing the dev server via the external IP
  allowedDevOrigins: ['163.245.212.84', 'http://163.245.212.84:3001'],
  
  // Explicitly set the root directory for Turbopack to silence the multiple lockfile warning
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
