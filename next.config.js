/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-images-1.medium.com", "medium.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
