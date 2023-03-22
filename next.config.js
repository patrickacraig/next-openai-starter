/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};


module.exports = { env: { OPENAI_API_KEY: process.env.OPENAI_API_KEY, }, };
module.exports = nextConfig
