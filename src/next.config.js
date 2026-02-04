/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出模式
  output: 'export',
  distDir: '../dist',
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
};

module.exports = nextConfig;
