/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  // 静态导出模式
  output: 'export',
  distDir: isDev ? '.next' : '../dist',
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
};

module.exports = nextConfig;
