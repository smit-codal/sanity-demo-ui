import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        pathname: "/**", // Corre
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
        pathname: "/**", // Corre
      },
    ],
  },
};

export default nextConfig;
