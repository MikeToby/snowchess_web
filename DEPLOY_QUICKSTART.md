# 快速部署指南

> 雪弈摄影工作室 - 从本地到服务器一键部署

---

## 🚀 方式一：PowerShell 脚本（推荐）

### 1. 打开 PowerShell

在 `D:\aicode\good\SnowChess 1.0` 目录，右键 → "在终端中打开"

### 2. 执行部署

```powershell
# 首次执行可能需要设置执行策略
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 执行部署
./deploy-local.ps1
```

### 3. 脚本会执行

1. ✅ 检查 scp/ssh 依赖
2. ✅ 测试 SSH 连接
3. ✅ 压缩本地代码（排除 node_modules）
4. ✅ 上传到服务器 /tmp/
5. ✅ 在服务器解压到 ~/snowchess/
6. ✅ 执行 `./deploy-server.sh full-setup`

---

## 🚀 方式二：CMD 脚本

### 1. 双击运行

双击 `deploy-upload.cmd`

### 2. 按提示操作

- 输入 `yes` 确认上传
- 上传完成后选择是否自动部署

---

## 🚀 方式三：手动命令（Windows CMD）

### 步骤 1：压缩代码

```cmd
cd D:\aicode\good\SnowChess 1.0

:: 使用 PowerShell 压缩
powershell Compress-Archive -Path "src","wordpress","nginx","ecosystem.config.js","deploy-server.sh","*.md" -DestinationPath "%TEMP%\snowchess.zip" -Force
```

### 步骤 2：上传

```cmd
:: 上传到服务器
scp %TEMP%\snowchess.zip ubuntu@1.14.122.3:/tmp/
```

### 步骤 3：在服务器解压

```cmd
:: SSH 登录并解压
ssh ubuntu@1.14.122.3 "cd /tmp && rm -rf /home/ubuntu/snowchess && unzip snowchess.zip -d /home/ubuntu/snowchess && rm snowchess.zip"
```

### 步骤 4：执行部署

```cmd
:: 执行部署脚本
ssh ubuntu@1.14.122.3 "cd /home/ubuntu/snowchess && chmod +x deploy-server.sh && ./deploy-server.sh full-setup"
```

---

## 🚀 方式四：Git 部署（如果代码在 GitHub）

### 服务器上执行

```bash
ssh ubuntu@1.14.122.3

cd ~
git clone https://github.com/yourusername/snowchess.git
cd snowchess

./deploy-server.sh full-setup
```

---

## 📋 部署后验证

### 1. 检查服务状态

```bash
ssh ubuntu@1.14.122.3

# 检查 Docker
cd ~/snowchess/wordpress
docker-compose ps

# 检查 PM2
pm2 status

# 检查端口
ss -tlnp | grep -E ':(80|443|3000)'
```

### 2. 测试访问

```bash
# 测试 HTTPS
curl -I https://snowchess.cn

# 测试 WP API
curl https://snowchess.cn/wp-json/wp/v2/posts | head -c 200

# 测试 Next.js 内网
curl http://localhost:3000 | head -c 200
```

### 3. 浏览器访问

- https://snowchess.cn/ - 首页
- https://snowchess.cn/works/ - 作品
- https://snowchess.cn/wp-admin/ - WP 后台

---

## 🔧 常见问题

### 问题 1：scp 命令不存在

**解决**：安装 OpenSSH 客户端

```powershell
# Windows 10/11 安装 OpenSSH
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
```

或手动：设置 → 应用 → 可选功能 → 添加功能 → OpenSSH 客户端

### 问题 2：SSH 连接失败

**检查**：
1. 服务器 IP 是否正确
2. SSH 密钥是否配置（`~/.ssh/id_rsa`）
3. 或使用密码登录

### 问题 3：权限不足

**解决**：
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 问题 4：上传中断

**解决**：使用 rsync（需要安装 cwRsync 或 Git Bash）

```bash
# Git Bash 中执行
rsync -avz --exclude='node_modules' --exclude='.next' \
  /d/aicode/good/SnowChess\ 1.0/ \
  ubuntu@1.14.122.3:/home/ubuntu/snowchess/
```

---

## 📁 文件说明

| 文件 | 用途 |
|------|------|
| `deploy-local.ps1` | PowerShell 一键部署脚本 |
| `deploy-upload.cmd` | CMD 批处理上传脚本 |
| `deploy-server.sh` | 服务器端部署脚本 |
| `DEPLOY_QUICKSTART.md` | 本文件 |

---

## ✅ 部署检查清单

- [ ] 代码已上传到 ~/snowchess/
- [ ] Node.js 20 已安装（v20.20.0）
- [ ] Docker WordPress 运行中
- [ ] Next.js 构建成功
- [ ] PM2 进程运行中
- [ ] Nginx 容器运行中
- [ ] HTTPS 访问正常
- [ ] WP API 返回数据

---

## 🆘 紧急回滚

如果部署失败，快速回滚：

```bash
ssh ubuntu@1.14.122.3

# 停止 Next.js
pm2 stop snowchess

# 重启 Docker Nginx
cd ~/snowchess/wordpress
docker-compose restart nginx

# 检查日志
pm2 logs
```
