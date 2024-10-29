/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: [],
  },
  webpack(config) {
    return config;
  },
};

module.exports = config;
