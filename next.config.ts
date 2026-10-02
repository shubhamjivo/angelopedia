import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Legacy angelopedia.com picture index URLs.
      { source: "/News-In-Picture", destination: "/news/in-pictures", permanent: true },
      { source: "/News-In-Pictures", destination: "/news/in-pictures", permanent: true },
    ];
  },
};

export default nextConfig;
