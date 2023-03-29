/** @type {import('next').NextConfig} */

export default {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
};
