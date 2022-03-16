/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["www.skullbots.io"],
    loader: "custom",
  },
};

module.exports = nextConfig;
