import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  devIndicators: false,
  images: {
    domains: ['https://zdcaswlejxszvsoamxgw.supabase.co', 'https://zdcaswlejxszvsoamxgw.storage.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zdcaswlejxszvsoamxgw.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zdcaswlejxszvsoamxgw.storage.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
