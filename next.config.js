/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
};
