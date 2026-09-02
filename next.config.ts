import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/method",
        destination: "/approach",
        permanent: true,
      },
      {
        source: "/method/:path*",
        destination: "/approach",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
