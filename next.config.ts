import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/method", destination: "/work", permanent: true },
      { source: "/method/:path*", destination: "/work", permanent: true },
      { source: "/approach", destination: "/work", statusCode: 301 },
      { source: "/approach/:path*", destination: "/work", statusCode: 301 },
      { source: "/evidence", destination: "/work", statusCode: 301 },
      { source: "/evidence/:path*", destination: "/work", statusCode: 301 },
      { source: "/work/black-clover", destination: "/work/systems-fleet", permanent: true },
      { source: "/work/slot/:path*", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
