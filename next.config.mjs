/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const API_BASE_URL = process.env.API_BASE_URL || 'https://api-congreso.aapresid.org.ar';
const apiHost = new URL(API_BASE_URL).hostname;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['v0.blob.com', apiHost],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: apiHost,
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Increase the asset size limit for videos
  experimental: {
    largePageDataBytes: 128 * 1000 * 1000, // 128MB
  },
};

export default withNextIntl(nextConfig);