import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* https://img.clerk.com/ */
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com",
        protocol: "https",
        pathname: "/**",
      },
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "https://img.clerk.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

export default nextConfig;
