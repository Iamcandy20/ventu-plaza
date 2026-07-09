/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-50cd36f5769045cdb03d5eb965f5c5b6.r2.dev",
      },
    ],
  },
};

module.exports = nextConfig;