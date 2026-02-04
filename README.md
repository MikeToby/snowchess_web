# 雪弈摄影工作室

纯静态版本 - Next.js 导出

## 构建

```bash
cd src
npm install
npm run build
```

构建输出在 `dist/` 目录

## 部署

将 `dist/` 目录上传到任意静态托管服务即可

```bash
# 示例：上传到服务器
scp -r dist/* user@server:/var/www/html/
```

## 技术栈

- Next.js 15
- React 19
- Tailwind CSS
- GSAP / Framer Motion

## 注意

本版本为纯静态导出，所有数据写在代码中
