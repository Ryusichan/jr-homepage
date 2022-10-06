/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["source.unsplash.com"],
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/pricing', query: { title: 'hello-nextjs' } },
      '/p/learn-nextjs': { page: '/whypluton', query: { title: 'learn-nextjs' } },
      '/p/deploy-nextjs': { page: '/whyJR', query: { title: 'deploy-nextjs' } },
    }
  },
};

module.exports = nextConfig;
