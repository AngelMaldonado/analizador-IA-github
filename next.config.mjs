/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bit.ly"],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  }
};

export default nextConfig;
