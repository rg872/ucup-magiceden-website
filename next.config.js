/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.skullbots.io"],
    loader: "custom",
  },
};

module.exports = nextConfig;
