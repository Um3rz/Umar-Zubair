/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracing: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;
