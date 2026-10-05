import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // National pageant desks reuse portraits and news thumbs from the live site.
      { protocol: "https", hostname: "www.angelopedia.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  async redirects() {
    return [
      // The Play Zone hub was folded into the Prediction Game page.
      { source: "/play", destination: "/Prediction-Game-for-Beauty-Pageants", permanent: true },
      // Legacy angelopedia.com picture index URLs.
      { source: "/News-In-Picture", destination: "/news/in-pictures", permanent: true },
      { source: "/News-In-Pictures", destination: "/news/in-pictures", permanent: true },
    ];
  },
};

export default nextConfig;
