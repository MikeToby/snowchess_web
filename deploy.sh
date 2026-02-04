#!/bin/bash

# 雪弈摄影工作室 - Headless CMS 部署脚本
# Next.js + WordPress

echo "🚀 SnowChess Studio - Headless CMS 部署脚本"
echo "============================================"
echo ""

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查命令是否存在
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# 显示帮助
show_help() {
  echo "用法: ./deploy.sh [命令]"
  echo ""
  echo "命令:"
  echo "  setup-wp        设置 WordPress Docker 环境"
  echo "  setup-fe        设置 Next.js 前端"
  echo "  deploy          部署到 Vercel"
  echo "  test-api        测试 WordPress API"
  echo "  help            显示帮助"
  echo ""
}

# 设置 WordPress
setup_wp() {
  echo -e "${YELLOW}📦 设置 WordPress Docker 环境...${NC}"
  
  if [ ! -d "wordpress" ]; then
    mkdir -p wordpress
  fi
  
  cd wordpress
  
  # 创建 docker-compose.yml
  cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  db:
    image: mysql:8.0
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: snowchess_root_2024
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: snowchess_wp_2024
    command: --default-authentication-plugin=mysql_native_password

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: snowchess_wp_2024
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - ./wp-content:/var/www/html/wp-content
      - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini

volumes:
  db_data:
EOF

  # 创建 PHP 配置
  cat > uploads.ini << 'EOF'
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 300
memory_limit = 256M
EOF

  echo -e "${GREEN}✅ WordPress Docker 配置已创建${NC}"
  echo ""
  echo "下一步操作:"
  echo "  1. cd wordpress"
  echo "  2. docker-compose up -d"
  echo "  3. 访问 http://localhost:8000 完成 WordPress 安装"
  echo ""
}

# 设置前端
setup_fe() {
  echo -e "${YELLOW}📦 设置 Next.js 前端...${NC}"
  
  if [ ! -d "src" ]; then
    echo -e "${RED}❌ 错误: 未找到 src 目录，请在项目根目录运行${NC}"
    exit 1
  fi
  
  cd src
  
  # 安装依赖
  if [ ! -d "node_modules" ]; then
    echo "安装依赖..."
    npm install
  fi
  
  # 创建环境变量文件
  if [ ! -f ".env.local" ]; then
    cp .env.local.example .env.local
    echo -e "${YELLOW}⚠️  请编辑 .env.local 文件，配置你的 WordPress API 地址${NC}"
  fi
  
  echo -e "${GREEN}✅ Next.js 前端配置完成${NC}"
  echo ""
  echo "下一步操作:"
  echo "  1. 编辑 src/.env.local 配置 WP API 地址"
  echo "  2. npm run dev (开发模式)"
  echo "  3. npm run build (生产构建)"
  echo ""
}

# 部署到 Vercel
deploy_vercel() {
  echo -e "${YELLOW}🚀 部署到 Vercel...${NC}"
  
  if ! command_exists vercel; then
    echo "安装 Vercel CLI..."
    npm install -g vercel
  fi
  
  cd src
  
  # 检查环境变量
  if [ ! -f ".env.production" ]; then
    cp .env.production.example .env.production
    echo -e "${YELLOW}⚠️  请编辑 .env.production 配置生产环境变量${NC}"
    exit 1
  fi
  
  vercel --prod
}

# 测试 API
test_api() {
  echo -e "${YELLOW}🧪 测试 WordPress API...${NC}"
  
  WP_URL=${1:-"http://localhost:8000"}
  
  echo "测试地址: $WP_URL"
  echo ""
  
  # 测试文章 API
  echo "测试文章 API..."
  curl -s "$WP_URL/wp-json/wp/v2/posts?per_page=1" | head -c 200
  echo ""
  echo ""
  
  # 测试页面 API
  echo "测试页面 API..."
  curl -s "$WP_URL/wp-json/wp/v2/pages?per_page=1" | head -c 200
  echo ""
  echo ""
  
  # 测试媒体 API
  echo "测试媒体 API..."
  curl -s "$WP_URL/wp-json/wp/v2/media?per_page=1" | head -c 200
  echo ""
  echo ""
  
  echo -e "${GREEN}✅ API 测试完成${NC}"
}

# 主命令处理
case "${1:-help}" in
  setup-wp)
    setup_wp
    ;;
  setup-fe)
    setup_fe
    ;;
  deploy)
    deploy_vercel
    ;;
  test-api)
    test_api "$2"
    ;;
  help|--help|-h|*)
    show_help
    ;;
esac
