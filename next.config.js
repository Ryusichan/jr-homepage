/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "source.unsplash.com",
      "pluton-imageres.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
