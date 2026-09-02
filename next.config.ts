import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/method", destination: "/work", permanent: true },
      { source: "/method/:path*", destination: "/work", permanent: true },
      { source: "/approach", destination: "/work", permanent: true },
      { source: "/approach/:path*", destination: "/work", permanent: true },
      { source: "/evidence", destination: "/work", permanent: true },
      { source: "/evidence/:path*", destination: "/work", permanent: true },
      { source: "/work/black-clover", destination: "/work/systems-fleet", permanent: true },
      { source: "/work/slot/:path*", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
