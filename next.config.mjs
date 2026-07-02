/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  allowedDevOrigins: [
    "163.245.212.84",
    "http://163.245.212.84:3001",
  ],
};

export default nextConfig;
