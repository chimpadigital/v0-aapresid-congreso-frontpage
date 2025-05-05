/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['v0.blob.com'],
  },
  // Increase the asset size limit for videos
  experimental: {
    largePageDataBytes: 128 * 1000 * 1000, // 128MB
  },
};

export default nextConfig;
