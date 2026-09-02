import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Retired IA. 301 to home — never to /work (that served the Work body).
    return [
      { source: "/method", destination: "/", permanent: true },
      { source: "/method/:path*", destination: "/", permanent: true },
      { source: "/approach", destination: "/", statusCode: 301 },
      { source: "/approach/:path*", destination: "/", statusCode: 301 },
      { source: "/evidence", destination: "/", statusCode: 301 },
      { source: "/evidence/:path*", destination: "/", statusCode: 301 },
      { source: "/work/black-clover", destination: "/work/systems-fleet", permanent: true },
      { source: "/work/slot/:path*", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
