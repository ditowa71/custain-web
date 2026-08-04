import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/news/bewerbung-direktmarketing-kampagne",
        destination: "https://www.karriva.com/ratgeber/bewerbung-als-direktmarketing-kampagne",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
