# 雪弈摄影工作室 - 设计文档

> **项目**: Snowchess Studio Website  
> **版本**: 1.0  
> **日期**: 2024  
> **文档类型**: Design Specification

---

## 1. Overview (项目概述)

### 1.1 项目简介
雪弈摄影工作室是一个专业摄影服务网站，展示工作室的摄影作品、团队介绍、服务范围，并提供档期查询与预约功能。

### 1.2 品牌定位
- **核心理念**: 至纯如雪，博弈瞬间 (Pure Vision. Strategic Capture.)
- **服务特色**: 专业摄影 + 温情服务 + 闪电交付
- **目标受众**: 企业客户、研学机构、旅行者、新婚夫妇、个人客户

### 1.3 服务分类
| 服务类型 | 配色标识 | 适用场景 |
|---------|---------|---------|
| 商业摄影 | 金色 #D4AF37 | 年会、活动、会议 |
| 研学摄影 | 芒果色 #FF9500 | 研学活动、教育机构 |
| 旅行跟拍 | 雪白 #FAFAFA | 个人/团体旅行 |
| 婚礼跟拍 | 金色 #D4AF37 | 婚礼、订婚 |
| 无人机航拍 | 天蓝 #4A90D9 | 风景、活动俯瞰 |
| 个人摄影 | 雪白 #FAFAFA | 写真、生日宴 |

### 1.4 核心特色
- **双Logo系统**: 研学页面使用雪鸮Logo，其他页面使用商业Logo
- **胶囊导航**: 滚动后悬浮固定的导航栏
- **3D卡片效果**: 作品集卡片支持鼠标悬停3D倾斜
- **无限滚动**: 作品集横向瀑布流无限循环

---

## 2. Page Manifest (页面清单)

| 页面ID | 页面名称 | 路由 | 优先级 | 备注 |
|-------|---------|------|-------|------|
| index | 首页 | / | P0 | 主入口，包含所有核心模块 |
| gallery | 作品集 | /gallery | P1 | 完整作品集展示 |
| team | 团队介绍 | /team | P1 | 摄影师详细介绍 |
| contact | 联系我们 | /contact | P1 | 联系表单+档期查询 |
| service-commercial | 商业服务 | /service/commercial | P2 | 年会/活动/会议 |
| service-study | 研学服务 | /service/study | P2 | 研学摄影专页 |
| service-wedding | 婚礼服务 | /service/wedding | P2 | 婚礼跟拍专页 |

---

## 3. Global Design System (全局设计系统)

### 3.1 Color Palette (配色方案)

#### 主色调
| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| Snow White | `#FAFAFA` | 主背景、卡片背景 |
| Pure White | `#FFFFFF` | 纯白背景、文字底色 |
| Dark Gray | `#1A1A1A` | 主文字、标题 |
| Medium Gray | `#666666` | 次要文字、描述 |
| Light Gray | `#999999` | 辅助文字、占位符 |
| Border Gray | `#E5E5E5` | 边框、分割线 |

#### 品牌色
| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| Mango | `#FF9500` | 研学服务强调、CTA按钮、高亮 |
| Gold | `#D4AF37` | 商业服务、婚礼服务、高端感 |
| Sky Blue | `#4A90D9` | 航拍服务、科技感 |
| Soft Black | `#0D0D0D` | 深色模式背景、页脚 |

#### 渐变方案
```css
/* Hero渐变遮罩 */
hero-overlay: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%);

/* 卡片悬停渐变 */
card-hover: linear-gradient(135deg, rgba(255,149,0,0.1) 0%, rgba(212,175,55,0.05) 100%);

/* 磨砂玻璃效果 */
glass-effect: backdrop-filter: blur(20px) saturate(180%);
           background: rgba(250,250,250,0.85);
```

### 3.2 Typography (字体系统)

#### 字体家族
```css
--font-primary: 'OPPO Sans', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif;
--font-en: 'Inter', 'Helvetica Neue', Arial, sans-serif;
```

#### 字体规格
| 样式 | 字号 | 字重 | 行高 | 字间距 | 用途 |
|-----|------|-----|------|-------|------|
| H1 | 48px/3rem | 700 | 1.2 | -0.02em | 页面大标题 |
| H2 | 36px/2.25rem | 700 | 1.3 | -0.01em | 区块标题 |
| H3 | 28px/1.75rem | 500 | 1.4 | 0 | 卡片标题 |
| H4 | 22px/1.375rem | 500 | 1.5 | 0 | 小标题 |
| Body | 16px/1rem | 400 | 1.7 | 0.01em | 正文 |
| Body Small | 14px/0.875rem | 400 | 1.6 | 0.02em | 辅助文字 |
| Caption | 12px/0.75rem | 400 | 1.5 | 0.03em | 标签、注释 |
| Slogan CN | 42px/2.625rem | 700 | 1.3 | 0.05em | 中文Slogan |
| Slogan EN | 18px/1.125rem | 500 | 1.4 | 0.15em | 英文Slogan |

### 3.3 Spacing System (间距系统)

#### 基础单位: 4px
| Token | 值 | 用途 |
|-------|---|------|
| space-1 | 4px | 最小间距 |
| space-2 | 8px | 紧凑间距 |
| space-3 | 12px | 小间距 |
| space-4 | 16px | 默认间距 |
| space-5 | 20px | 中等间距 |
| space-6 | 24px | 组件内边距 |
| space-8 | 32px | 卡片内边距 |
| space-10 | 40px | 区块小间距 |
| space-12 | 48px | 区块间距 |
| space-16 | 64px | 大区块间距 |
| space-20 | 80px | 主要区块间距 |
| space-24 | 96px | Hero区块间距 |

#### 容器宽度
```css
--container-max: 1440px;
--container-lg: 1200px;
--container-md: 960px;
--container-sm: 720px;
--container-padding: 24px; /* mobile: 16px */
```

### 3.4 Border & Radius (边框与圆角)

```css
/* 圆角 */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;

/* 边框 */
--border-light: 1px solid #E5E5E5;
--border-medium: 1px solid #CCCCCC;
--border-accent: 2px solid #FF9500;
```

### 3.5 Shadow System (阴影系统)

```css
/* 卡片阴影 */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 48px rgba(0,0,0,0.16);

/* 悬停阴影 */
--shadow-hover: 0 12px 32px rgba(0,0,0,0.15);

/* 发光效果 */
--glow-mango: 0 0 20px rgba(255,149,0,0.3);
--glow-gold: 0 0 20px rgba(212,175,55,0.3);
```

### 3.6 Animation System (动画系统)

#### 缓动函数
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

#### 时长规范
| 类型 | 时长 | 用途 |
|-----|------|------|
| instant | 100ms | 微交互、状态切换 |
| fast | 200ms | 按钮反馈、小动画 |
| normal | 300ms | 悬停效果、过渡 |
| slow | 500ms | 页面过渡、大动画 |
| slower | 800ms | 复杂动画序列 |
| dramatic | 1200ms | Hero动画、强调动画 |


---

## 4. Page Specifications (页面详细规范)

### 4.1 首页 (index)

#### Section 1: Hero区域

**布局与样式:**
- 全屏高度: 100vh (min-height: 600px)
- 背景: 全屏图片轮播，5秒自动切换
- 遮罩: 线性渐变遮罩 (从上往下透明度 30%→10%→50%)
- 内容居中: Flexbox居中
- 内边距: padding: 0 24px

**内容结构:**
```
Hero Section
├── Background Slider (5 images, auto-rotate 5s)
├── Overlay Gradient
├── Content Container (centered)
│   ├── Logo (双Logo系统)
│   ├── Slogan CN: "至纯如雪，博弈瞬间"
│   ├── Slogan EN: "Pure Vision. Strategic Capture."
│   └── CTA Button: "查看作品集"
└── Scroll Indicator (底部)
```

**交互:**
| 元素 | 触发 | 动画 | 时长 | 缓动 |
|-----|------|-----|------|------|
| 背景图切换 | 自动5s | 淡入淡出 | 1000ms | ease-in-out |
| Slogan | 页面加载 | fadeInUp | 800ms | ease-out |
| Slogan EN | 页面加载 | fadeInUp (delay 200ms) | 800ms | ease-out |
| CTA按钮 | 页面加载 | scaleIn (delay 400ms) | 600ms | ease-spring |
| CTA按钮 | hover | scale(1.05) + glow | 200ms | ease-out |
| 滚动指示器 | 持续 | 上下浮动 | 2000ms | ease-in-out (infinite) |

**3D效果:**
- 背景图片视差滚动: translateY at 0.3x scroll speed
- 文字层视差: translateY at 0.5x scroll speed

---

#### Section 2: 作品集 (Portfolio)

**布局与样式:**
- 背景: #FFFFFF
- 内边距: padding: 80px 0
- 标题区: 居中，margin-bottom: 48px
- 瀑布流容器: 全宽，overflow: hidden
- 卡片排列: 两排交错 (上排竖图，下排横图)

**内容结构:**
```
Portfolio Section
├── Section Header
│   ├── Title: "作品集"
│   ├── Subtitle: "用镜头记录每一个珍贵瞬间"
│   └── Filter Tabs (全部/年会/活动/会议/研学/旅行/航拍/婚礼/生日宴)
├── Waterfall Container
│   ├── Row 1 (竖图卡片, 高度 400px)
│   │   └── Cards × 8 (infinite scroll)
│   └── Row 2 (横图卡片, 高度 280px, offset 50%)
│       └── Cards × 8 (infinite scroll, reverse direction)
└── View All Button
```

**卡片规格:**
| 属性 | 竖图卡片 | 横图卡片 |
|-----|---------|---------|
| 宽度 | 280px | 400px |
| 高度 | 400px | 280px |
| 圆角 | 16px | 16px |
| 间距 | 24px | 24px |
| 图片 | object-fit: cover | object-fit: cover |

**3D倾斜效果 (奥特曼闪卡效果):**
```css
/* 卡片基础 */
.portfolio-card {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.3s var(--ease-out);
}

/* 悬停倾斜 - 最大±15° */
.portfolio-card:hover {
  transform: rotateX(var(--rotate-x, -5deg)) rotateY(var(--rotate-y, 5deg)) scale(1.02);
}

/* 光泽效果 */
.portfolio-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255,255,255,0.3) 50%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.portfolio-card:hover::after {
  opacity: 1;
  animation: shimmer 0.6s ease-out;
}
```

**JavaScript 3D倾斜逻辑:**
```javascript
// 鼠标位置映射到±15°倾斜
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  // 计算倾斜角度 (最大15°)
  const rotateY = ((x - centerX) / centerX) * 15;
  const rotateX = ((centerY - y) / centerY) * 15;
  
  card.style.setProperty('--rotate-x', `${-rotateX}deg`);
  card.style.setProperty('--rotate-y', `${rotateY}deg`);
});

card.addEventListener('mouseleave', () => {
  card.style.setProperty('--rotate-x', '0deg');
  card.style.setProperty('--rotate-y', '0deg');
});
```

**无限滚动动画:**
```css
/* 上排向左滚动 */
.scroll-row-1 {
  animation: scrollX 40s linear infinite;
}

/* 下排向右滚动 */
.scroll-row-2 {
  animation: scrollX 45s linear infinite reverse;
}

/* 悬停暂停 */
.waterfall-container:hover .scroll-row {
  animation-play-state: paused;
}
```

**交互:**
| 元素 | 触发 | 动画 | 时长 | 缓动 |
|-----|------|-----|------|------|
| 卡片 | hover | 3D倾斜±15° + scale(1.02) | 300ms | ease-out |
| 卡片 | hover | 光泽扫过效果 | 600ms | ease-out |
| 滚动行 | 持续 | translateX无限循环 | 40-45s | linear |
| Filter Tab | click | 下划线滑入 | 300ms | ease-out |
| Filter Tab | active | 颜色变为Mango | 200ms | ease |

---

#### Section 3: 服务介绍 (Services)

**布局与样式:**
- 背景: #FAFAFA
- 内边距: padding: 96px 24px
- 网格: 3列 (desktop), 2列 (tablet), 1列 (mobile)
- 卡片间距: gap: 32px

**内容结构:**
```
Services Section
├── Section Header
│   ├── Title: "我们的服务"
│   └── Subtitle: "专业团队，为您定格每一个精彩瞬间"
├── Services Grid
│   └── Service Card × 6
│       ├── Icon (48px)
│       ├── Title
│       ├── Description
│       └── Link: "了解更多 →"
└── CTA Banner
    ├── Text: "需要定制化摄影服务？"
    └── Button: "联系我们"
```

**服务卡片规格:**
| 服务 | 图标 | 配色 | 标题 | 描述 |
|-----|------|-----|------|------|
| 商业摄影 | Building | Gold | 商业摄影 | 年会、活动、会议专业记录 |
| 研学摄影 | GraduationCap | Mango | 研学摄影 | 记录成长，珍藏回忆 |
| 旅行跟拍 | Plane | White | 旅行跟拍 | 您的专属旅行摄影师 |
| 婚礼跟拍 | Heart | Gold | 婚礼跟拍 | 定格幸福时刻 |
| 无人机航拍 | Camera | Sky Blue | 无人机航拍 | 俯瞰世界，全新视角 |
| 个人摄影 | User | White | 个人摄影 | 专属您的光影故事 |

**卡片样式:**
```css
.service-card {
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 32px;
  border: 1px solid rgba(229,229,229,0.5);
  transition: all 0.4s var(--ease-out);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--service-color);
}

.service-card:hover .icon {
  transform: scale(1.1);
  color: var(--service-color);
}
```

**交互:**
| 元素 | 触发 | 动画 | 时长 | 缓动 |
|-----|------|-----|------|------|
| 卡片 | hover | translateY(-8px) | 400ms | ease-out |
| 卡片 | hover | 边框变色 | 400ms | ease |
| 图标 | hover | scale(1.1) + 变色 | 300ms | ease-spring |
| 卡片 | scroll into view | fadeInUp (stagger 100ms) | 600ms | ease-out |

---

#### Section 4: 团队介绍 (Team)

**布局与样式:**
- 背景: #FFFFFF
- 内边距: padding: 96px 24px
- 网格: 4列 (desktop), 2列 (tablet), 1列 (mobile)
- 卡片间距: gap: 32px

**内容结构:**
```
Team Section
├── Section Header
│   ├── Title: "摄影师团队"
│   └── Subtitle: "专业、热情、富有创造力的摄影团队"
├── Team Grid
│   └── Photographer Card × 4
│       ├── Photo (圆形, 200px)
│       ├── Name
│       ├── Title
│       ├── Specialty Tags
│       └── Short Bio
└── Stats Row
    ├── 1000+ 服务客户
    ├── 5000+ 精修照片
    ├── 50+ 合作企业
    └── 99% 客户满意度
```

**摄影师数据:**
| 姓名 | 职位 | 专长 | 简介 |
|-----|------|-----|------|
| 袁天弈 | 创始人/首席摄影师 | 商业、婚礼 | 10年摄影经验，擅长捕捉决定性瞬间 |
| 赵本志 | 资深摄影师 | 研学、活动 | 专注教育摄影，记录孩子成长点滴 |
| 陆金川 | 航拍摄影师 | 航拍、风光 | 持证无人机飞手，独特空中视角 |
| 郭晨曦 | 人像摄影师 | 个人、婚礼 | 细腻情感捕捉，温暖影像风格 |

**卡片样式:**
```css
.photographer-card {
  text-align: center;
  padding: 48px 32px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%);
  border-radius: 24px;
  border: 1px solid #E5E5E5;
  transition: all 0.4s var(--ease-out);
}

.photographer-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #FFFFFF;
  box-shadow: var(--shadow-lg);
  transition: all 0.4s var(--ease-out);
}

.photographer-card:hover {
  transform: translateY(-12px);
  box-shadow: var(--shadow-xl);
  border-color: #FF9500;
}

.photographer-card:hover .photographer-photo {
  transform: scale(1.05);
  box-shadow: 0 0 0 4px rgba(255,149,0,0.2);
}
```

**交互:**
| 元素 | 触发 | 动画 | 时长 | 缓动 |
|-----|------|-----|------|------|
| 卡片 | hover | translateY(-12px) | 400ms | ease-out |
| 照片 | hover | scale(1.05) + 光环 | 400ms | ease-out |
| 卡片 | scroll into view | fadeInUp (stagger 150ms) | 600ms | ease-out |
| 数字统计 | scroll into view | 数字递增动画 | 2000ms | ease-out |


---

#### Section 5: 品牌背书 (Clients)

**布局与样式:**
- 背景: #FAFAFA
- 内边距: padding: 80px 24px
- Logo墙: 网格布局，6列 (desktop), 4列 (tablet), 3列 (mobile)
- Logo间距: gap: 48px

**内容结构:**
```
Clients Section
├── Section Header
│   ├── Title: "合作伙伴"
│   └── Subtitle: "值得信赖的摄影服务提供商"
├── Logo Grid
│   └── Client Logo × 12 (grayscale, hover color)
└── Testimonial (optional)
    ├── Quote
    ├── Author
    └── Company
```

**Logo样式:**
```css
.client-logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.4s var(--ease-out);
  max-height: 48px;
  object-fit: contain;
}

.client-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.1);
}
```

**交互:**
| 元素 | 触发 | 动画 | 时长 | 缓动 |
|-----|------|-----|------|------|
| Logo | hover | grayscale(0) + scale(1.1) | 400ms | ease-out |
| Logo墙 | scroll into view | fadeIn (stagger 50ms) | 500ms | ease-out |

---

#### Section 6: 联系我们 + 档期查询 (Contact)

**布局与样式:**
- 背景: 渐变 linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)
- 内边距: padding: 96px 24px
- 两栏布局: 联系信息(左) + 表单(右)
- 文字颜色: #FFFFFF (主), rgba(255,255,255,0.7) (次)

**内容结构:**
```
Contact Section
├── Left Column
│   ├── Title: "联系我们"
│   ├── Subtitle
│   ├── Contact Info
│   │   ├── Phone: 138-XXXX-XXXX
│   │   ├── Email: contact@snowchess.studio
│   │   ├── Address: XX市XX区XX路XX号
│   │   └── WeChat: snowchess_studio
│   ├── Social Links
│   └── QR Code (微信)
└── Right Column
    ├── Form Title: "档期查询"
    ├── Form
    │   ├── Name Input
    │   ├── Phone Input
    │   ├── Service Select
    │   ├── Date Picker
    │   ├── Message Textarea
    │   └── Submit Button
    └── Success Message (hidden)
```

**表单样式:**
```css
.contact-input {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 16px 20px;
  color: #FFFFFF;
  transition: all 0.3s var(--ease-out);
}

.contact-input:focus {
  border-color: #FF9500;
  background: rgba(255,255,255,0.15);
  outline: none;
}

.submit-btn {
  background: linear-gradient(135deg, #FF9500 0%, #FFB84D 100%);
  border-radius: 12px;
  padding: 16px 48px;
  font-weight: 600;
  transition: all 0.3s var(--ease-out);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-mango);
}
```

**交互:**
| 元素 | 触发 | 动画 | 时长 | 缓动 |
|-----|------|-----|------|------|
| 输入框 | focus | 边框变Mango + 背景变亮 | 300ms | ease-out |
| 提交按钮 | hover | translateY(-2px) + glow | 300ms | ease-out |
| 提交按钮 | click | scale(0.98) | 100ms | ease |
| 表单 | submit success | 表单淡出，成功消息淡入 | 500ms | ease-out |

---

#### Section 7: 页脚 (Footer)

**布局与样式:**
- 背景: #0D0D0D
- 内边距: padding: 64px 24px 32px
- 文字: rgba(255,255,255,0.6)

**内容结构:**
```
Footer
├── Footer Content
│   ├── Logo + Slogan
│   ├── Quick Links
│   ├── Services
│   └── Contact Info
├── Divider
├── Footer Bottom
│   ├── Copyright: "© 2024 雪弈摄影工作室 All Rights Reserved"
│   ├── ICP备案号
│   └── Easter Egg: 黑猫&暹罗猫图片
└── Back to Top Button
```

**彩蛋样式:**
```css
.easter-egg {
  position: absolute;
  bottom: 20px;
  right: 20px;
  opacity: 0.3;
  transition: opacity 0.3s;
}

.easter-egg:hover {
  opacity: 1;
}

.easter-egg img {
  width: 80px;
  height: auto;
  border-radius: 8px;
}
```

---

### 4.2 导航栏 (Navigation)

#### 初始状态 (页面顶部)
- 位置: 绝对定位，top: 0
- 背景: 透明
- Logo: 白色版本
- 文字: 白色

#### 滚动后状态 (悬浮胶囊)
```css
.nav-capsule {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(250,250,250,0.9);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 50px;
  padding: 12px 32px;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255,255,255,0.5);
  transition: all 0.4s var(--ease-out);
  z-index: 1000;
}

.nav-capsule .logo {
  /* 切换为深色版本 */
  filter: invert(1);
}

.nav-capsule .nav-link {
  color: #1A1A1A;
}

.nav-capsule .nav-link:hover {
  color: #FF9500;
}
```

**滚动检测:**
```javascript
// 滚动超过100px后显示胶囊导航
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const nav = document.querySelector('.navigation');
  
  if (currentScrollY > 100) {
    nav.classList.add('nav-capsule');
  } else {
    nav.classList.remove('nav-capsule');
  }
  
  lastScrollY = currentScrollY;
});
```

**导航链接:**
| 链接 | 目标 | 备注 |
|-----|------|------|
| 首页 | #hero | |
| 作品集 | #portfolio | |
| 服务 | #services | |
| 团队 | #team | |
| 联系我们 | #contact | CTA按钮样式 |

**交互:**
| 元素 | 触发 | 动画 | 时长 | 缓动 |
|-----|------|-----|------|------|
| 导航栏 | scroll > 100px | 变形为胶囊 | 400ms | ease-out |
| 导航链接 | hover | 下划线滑入 | 300ms | ease-out |
| CTA按钮 | hover | scale(1.05) + glow | 200ms | ease-out |

---

### 4.3 双Logo系统

#### Logo切换逻辑
```javascript
// 根据页面路径切换Logo
function getLogoForPage(pathname) {
  if (pathname.includes('/service/study') || pathname.includes('研学')) {
    return {
      src: '/logo-snowy-owl.svg',
      alt: '雪鸮Logo - 研学摄影'
    };
  }
  return {
    src: '/logo-commercial.svg', 
    alt: '雪弈摄影工作室'
  };
}

// Logo切换动画
.logo-container {
  position: relative;
  width: 120px;
  height: 48px;
}

.logo {
  position: absolute;
  transition: all 0.5s var(--ease-out);
}

.logo-enter {
  opacity: 0;
  transform: scale(0.8) rotateY(90deg);
}

.logo-enter-active {
  opacity: 1;
  transform: scale(1) rotateY(0);
}

.logo-exit {
  opacity: 1;
  transform: scale(1) rotateY(0);
}

.logo-exit-active {
  opacity: 0;
  transform: scale(0.8) rotateY(-90deg);
}
```


---

## 5. Technical Requirements (技术需求)

### 5.1 核心技术栈
| 技术 | 用途 | 版本 |
|-----|------|------|
| Next.js | React框架 | 14.x |
| TypeScript | 类型安全 | 5.x |
| Tailwind CSS | 样式系统 | 3.x |
| Framer Motion | 动画库 | 11.x |
| GSAP | 复杂动画 | 3.x |
| Swiper | 轮播组件 | 11.x |

### 5.2 浏览器支持
| 浏览器 | 最低版本 |
|-------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

### 5.3 性能要求
- **Lighthouse Score**: Performance ≥ 90
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### 5.4 响应式断点
```css
/* Mobile First */
--breakpoint-sm: 640px;   /* 手机横屏 */
--breakpoint-md: 768px;   /* 平板 */
--breakpoint-lg: 1024px;  /* 小桌面 */
--breakpoint-xl: 1280px;  /* 桌面 */
--breakpoint-2xl: 1536px; /* 大桌面 */
```

### 5.5 无障碍要求
- 所有图片必须包含 alt 属性
- 颜色对比度 ≥ 4.5:1
- 支持键盘导航
- 支持屏幕阅读器
- 动画支持 prefers-reduced-motion

---

## 6. Image Requirements (图片需求)

### 6.1 Hero轮播图片 (5张)

#### Hero-1: 雪山风景
| 属性 | 值 |
|-----|---|
| 用途 | Hero主背景 |
| 尺寸 | 1920x1080px |
| 比例 | 16:9 |
| 风格 | 自然风光，雄伟壮观 |

**搜索关键词:**
- 中文: "雪山风景 高清 壮观 蓝天 云海 山峰"
- 英文: "snow mountain landscape majestic blue sky clouds peaks scenic"

**生成提示词:**
```
Majestic snow-capped mountain landscape at golden hour, dramatic peaks piercing through clouds, pristine white snow contrasting with deep blue sky, warm golden sunlight illuminating the mountain ridges, professional photography style, ultra high definition, cinematic composition, 8K quality
```

---

#### Hero-2: 城市夜景
| 属性 | 值 |
|-----|---|
| 用途 | Hero背景 |
| 尺寸 | 1920x1080px |
| 比例 | 16:9 |
| 风格 | 城市夜景，繁华璀璨 |

**搜索关键词:**
- 中文: "城市夜景 灯光璀璨 摩天大楼 都市风光"
- 英文: "city night skyline skyscrapers lights urban landscape"

**生成提示词:**
```
Stunning city skyline at night, illuminated skyscrapers reflecting on water, vibrant city lights creating a sea of gold and blue, modern urban architecture, long exposure photography style, dramatic clouds in the night sky, professional cityscape photography, 8K ultra HD
```

---

#### Hero-3: 婚礼浪漫场景
| 属性 | 值 |
|-----|---|
| 用途 | Hero背景 |
| 尺寸 | 1920x1080px |
| 比例 | 16:9 |
| 风格 | 婚礼场景，浪漫温馨 |

**搜索关键词:**
- 中文: "婚礼现场 浪漫 鲜花 灯光 温馨"
- 英文: "wedding ceremony romantic flowers lights elegant venue"

**生成提示词:**
```
Elegant wedding ceremony setup, soft romantic lighting with fairy lights, beautiful floral arrangements in white and blush pink, outdoor garden venue at sunset, dreamy atmosphere, professional wedding photography style, warm golden hour lighting, cinematic composition
```

---

#### Hero-4: 研学活动
| 属性 | 值 |
|-----|---|
| 用途 | Hero背景 |
| 尺寸 | 1920x1080px |
| 比例 | 16:9 |
| 风格 | 研学活动，青春活力 |

**搜索关键词:**
- 中文: "学生研学 户外活动 自然探索 教育旅行"
- 英文: "students outdoor education field trip nature learning"

**生成提示词:**
```
Group of diverse students on an outdoor educational field trip, exploring nature with notebooks and cameras, bright sunny day in a beautiful natural setting, children showing curiosity and excitement, warm and vibrant atmosphere, professional documentary photography style
```

---

#### Hero-5: 航拍风景
| 属性 | 值 |
|-----|---|
| 用途 | Hero背景 |
| 尺寸 | 1920x1080px |
| 比例 | 16:9 |
| 风格 | 航拍视角，壮观全景 |

**搜索关键词:**
- 中文: "航拍风景 俯瞰 壮观 自然风光 全景"
- 英文: "aerial view landscape drone photography panoramic scenic"

**生成提示词:**
```
Breathtaking aerial view of a winding river through lush green mountains, dramatic bird's eye perspective, morning mist rising from the valley, golden sunlight casting long shadows, professional drone photography, ultra wide angle, 8K resolution, cinematic color grading
```


---

### 6.2 作品集图片 (8个分类)

#### Portfolio-1: 年会摄影
| 属性 | 值 |
|-----|---|
| 数量 | 4张 (2竖2横) |
| 竖图尺寸 | 800x1200px |
| 横图尺寸 | 1200x800px |

**搜索关键词:**
- 中文: "公司年会 舞台 灯光 表演 庆典"
- 英文: "corporate annual party stage performance celebration event"

**生成提示词 (竖图):**
```
Professional corporate annual meeting photography, elegant stage with dramatic lighting, performers in formal attire, vibrant atmosphere with colorful spotlights, professional event photography style, vertical composition, high-end corporate event
```

---

#### Portfolio-2: 活动摄影
| 属性 | 值 |
|-----|---|
| 数量 | 4张 (2竖2横) |
| 竖图尺寸 | 800x1200px |
| 横图尺寸 | 1200x800px |

**搜索关键词:**
- 中文: "活动摄影 发布会 展会 人群 热闹"
- 英文: "event photography product launch exhibition crowd"

**生成提示词 (横图):**
```
Dynamic product launch event photography, excited crowd interacting with displays, modern venue with sleek design, professional lighting, energetic atmosphere, horizontal composition, corporate event documentation
```

---

#### Portfolio-3: 会议摄影
| 属性 | 值 |
|-----|---|
| 数量 | 4张 (2竖2横) |
| 竖图尺寸 | 800x1200px |
| 横图尺寸 | 1200x800px |

**搜索关键词:**
- 中文: "商务会议 演讲 听众 专业 正式"
- 英文: "business conference speaker presentation audience professional"

**生成提示词:**
```
Professional business conference photography, confident speaker presenting on stage, engaged audience in modern conference hall, professional lighting setup, corporate atmosphere, documentary style photography
```

---

#### Portfolio-4: 研学摄影
| 属性 | 值 |
|-----|---|
| 数量 | 4张 (2竖2横) |
| 竖图尺寸 | 800x1200px |
| 横图尺寸 | 1200x800px |

**搜索关键词:**
- 中文: "学生研学 博物馆 学习 探索 教育"
- 英文: "educational field trip students museum learning exploration"

**生成提示词:**
```
Educational field trip photography, curious students exploring museum exhibits, interactive learning experience, bright and engaging atmosphere, children showing wonder and discovery, professional documentary style
```

---

#### Portfolio-5: 旅行摄影
| 属性 | 值 |
|-----|---|
| 数量 | 4张 (2竖2横) |
| 竖图尺寸 | 800x1200px |
| 横图尺寸 | 1200x800px |

**搜索关键词:**
- 中文: "旅行摄影 风景 自然 探索 冒险"
- 英文: "travel photography landscape nature adventure exploration"

**生成提示词:**
```
Stunning travel photography, solo traveler overlooking breathtaking mountain vista, golden hour lighting, sense of adventure and freedom, professional travel documentary style, inspiring wanderlust composition
```

---

#### Portfolio-6: 航拍作品
| 属性 | 值 |
|-----|---|
| 数量 | 4张 (2竖2横) |
| 竖图尺寸 | 800x1200px |
| 横图尺寸 | 1200x800px |

**搜索关键词:**
- 中文: "航拍 俯瞰 风景 壮观 无人机"
- 英文: "aerial photography drone view landscape spectacular"

**生成提示词:**
```
Spectacular aerial drone photography, bird's eye view of coastal landscape, turquoise water meeting golden sand, dramatic natural patterns from above, professional drone cinematography style, breathtaking perspective
```

---

#### Portfolio-7: 婚礼摄影
| 属性 | 值 |
|-----|---|
| 数量 | 4张 (2竖2横) |
| 竖图尺寸 | 800x1200px |
| 横图尺寸 | 1200x800px |

**搜索关键词:**
- 中文: "婚礼摄影 新娘 浪漫 幸福 仪式"
- 英文: "wedding photography bride romantic ceremony happiness"

**生成提示词:**
```
Beautiful wedding photography, elegant bride in stunning white gown, romantic outdoor ceremony setting, soft natural lighting, emotional and joyful moment, professional wedding photography style, timeless composition
```

---

#### Portfolio-8: 生日宴摄影
| 属性 | 值 |
|-----|---|
| 数量 | 4张 (2竖2横) |
| 竖图尺寸 | 800x1200px |
| 横图尺寸 | 1200x800px |

**搜索关键词:**
- 中文: "生日派对 庆祝 蛋糕 欢乐 聚会"
- 英文: "birthday party celebration cake joy gathering"

**生成提示词:**
```
Joyful birthday celebration photography, beautifully decorated venue with balloons and flowers, happy guests celebrating, elegant birthday cake as centerpiece, warm and festive atmosphere, professional event photography
```

---

### 6.3 团队照片 (4张)

| 摄影师 | 尺寸 | 风格 |
|-------|------|------|
| 袁天弈 | 600x600px | 专业商务，自信微笑 |
| 赵本志 | 600x600px | 亲和友善，教育背景 |
| 陆金川 | 600x600px | 户外风格，冒险精神 |
| 郭晨曦 | 600x600px | 温暖亲切，艺术气质 |

**搜索关键词:**
- 中文: "专业摄影师 肖像 工作室 相机 自信"
- 英文: "professional photographer portrait studio camera confident"

**生成提示词 (通用):**
```
Professional portrait of a Chinese photographer, confident pose holding professional camera, studio lighting with soft shadows, neutral background, wearing smart casual attire, friendly and approachable expression, professional headshot photography style, high quality portrait
```

---

### 6.4 客户Logo (12个)

| 类型 | 数量 | 风格 |
|-----|------|------|
| 企业公司Logo | 6个 | 简洁现代 |
| 教育机构Logo | 3个 | 专业可信 |
| 婚庆公司Logo | 3个 | 优雅浪漫 |

**搜索关键词:**
- 中文: "公司logo 企业标志 品牌标识 矢量"
- 英文: "company logo corporate brand identity vector"

---

### 6.5 页脚彩蛋图片

#### 彩蛋-1: 黑猫
| 属性 | 值 |
|-----|---|
| 用途 | 页脚彩蛋 |
| 尺寸 | 200x200px |
| 风格 | 可爱，神秘 |

**搜索关键词:**
- 中文: "黑猫 可爱 萌宠 高清"
- 英文: "black cat cute adorable pet high quality"

**生成提示词:**
```
Adorable black cat with bright yellow eyes, sitting pose, soft fluffy fur, studio lighting, clean background, cute and mysterious expression, professional pet photography, high quality image
```

---

#### 彩蛋-2: 暹罗猫
| 属性 | 值 |
|-----|---|
| 用途 | 页脚彩蛋 |
| 尺寸 | 200x200px |
| 风格 | 优雅，高贵 |

**搜索关键词:**
- 中文: "暹罗猫 优雅 高贵 宠物"
- 英文: "siamese cat elegant royal pet"

**生成提示词:**
```
Elegant Siamese cat with striking blue eyes, regal sitting pose, cream and brown pointed coat pattern, professional studio lighting, clean background, sophisticated and graceful expression, high-end pet photography
```

---

### 6.6 Logo设计需求

#### Logo-1: 商业Logo
| 属性 | 值 |
|-----|---|
| 用途 | 主Logo |
| 尺寸 | SVG矢量 |
| 风格 | 现代简约，专业 |

**设计要求:**
- 结合"雪"和"弈"的概念
- 可以使用雪花+棋子的抽象组合
- 颜色: 主色#1A1A1A，强调色#D4AF37

**生成提示词:**
```
Modern minimalist logo design, abstract combination of snowflake and chess piece elements, elegant and professional style, black and gold color scheme, clean geometric shapes, suitable for photography studio brand, vector style, white background
```

---

#### Logo-2: 研学雪鸮Logo
| 属性 | 值 |
|-----|---|
| 用途 | 研学服务专属Logo |
| 尺寸 | SVG矢量 |
| 风格 | 可爱友好，教育感 |

**设计要求:**
- 雪鸮(白色猫头鹰)形象
- 可爱友好，适合教育场景
- 颜色: 白色+芒果色#FF9500点缀

**生成提示词:**
```
Cute snowy owl mascot logo design, friendly and approachable expression, white feathers with orange accent details, suitable for educational photography service, modern flat design style, clean vector illustration, white background
```


---

## 7. Navigation Structure (导航结构)

### 7.1 主导航

```
Navigation
├── Logo (双Logo系统)
│   ├── 商业Logo (默认)
│   └── 雪鸮Logo (研学页面)
├── Nav Links
│   ├── 首页
│   ├── 作品集
│   ├── 服务 (Dropdown)
│   │   ├── 商业摄影
│   │   ├── 研学摄影
│   │   ├── 旅行跟拍
│   │   ├── 婚礼跟拍
│   │   ├── 无人机航拍
│   │   └── 个人摄影
│   ├── 团队介绍
│   └── 联系我们
└── CTA Button: "预约咨询"
```

### 7.2 页脚导航

```
Footer Navigation
├── Column 1: 品牌
│   ├── Logo
│   └── Slogan
├── Column 2: 快速链接
│   ├── 首页
│   ├── 作品集
│   ├── 服务介绍
│   └── 团队介绍
├── Column 3: 服务项目
│   ├── 商业摄影
│   ├── 研学摄影
│   ├── 婚礼跟拍
│   └── 更多服务...
└── Column 4: 联系方式
    ├── 电话
    ├── 邮箱
    ├── 地址
    └── 社交媒体
```

### 7.3 面包屑导航 (可选)

```
首页 > 服务 > 研学摄影
首页 > 作品集 > 婚礼
```

### 7.4 锚点导航 (单页)

| 锚点 | 目标区块 | 滚动偏移 |
|-----|---------|---------|
| #hero | Hero区域 | 0 |
| #portfolio | 作品集 | -80px |
| #services | 服务介绍 | -80px |
| #team | 团队介绍 | -80px |
| #clients | 品牌背书 | -80px |
| #contact | 联系我们 | -80px |

---

## 8. Component Library (组件库)

### 8.1 Button组件

**Primary Button (CTA)**
```css
.btn-primary {
  background: linear-gradient(135deg, #FF9500 0%, #FFB84D 100%);
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s var(--ease-out);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255,149,0,0.3);
}
```

**Secondary Button**
```css
.btn-secondary {
  background: transparent;
  color: #1A1A1A;
  padding: 16px 32px;
  border-radius: 12px;
  border: 2px solid #1A1A1A;
  font-weight: 600;
  transition: all 0.3s var(--ease-out);
}

.btn-secondary:hover {
  background: #1A1A1A;
  color: #FFFFFF;
}
```

### 8.2 Card组件

**Portfolio Card**
```css
.portfolio-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.3s var(--ease-out);
}

.portfolio-card:hover {
  transform: rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) scale(1.02);
}
```

**Service Card**
```css
.service-card {
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(229,229,229,0.5);
  transition: all 0.4s var(--ease-out);
}
```

### 8.3 Form组件

**Input Field**
```css
.form-input {
  width: 100%;
  padding: 16px 20px;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s var(--ease-out);
}

.form-input:focus {
  border-color: #FF9500;
  outline: none;
  box-shadow: 0 0 0 3px rgba(255,149,0,0.1);
}
```

---

## 9. Responsive Design (响应式设计)

### 9.1 断点适配

| 断点 | 宽度 | 布局调整 |
|-----|------|---------|
| Mobile | < 640px | 单列布局，简化动画 |
| Tablet | 640-1024px | 2列网格 |
| Desktop | > 1024px | 完整布局，所有动画 |

### 9.2 移动端适配

**导航:**
- 隐藏桌面导航
- 显示汉堡菜单
- 全屏抽屉式菜单

**Hero:**
- 字号缩小30%
- 轮播改为滑动切换
- 移除视差效果

**作品集:**
- 单列显示
- 移除3D倾斜效果
- 改为垂直滚动

**团队:**
- 单列卡片
- 水平滑动

### 9.3 触摸优化
- 按钮最小点击区域: 44x44px
- 增加卡片间距
- 简化悬停效果为点击效果

---

## 10. Animation Specifications (动画详细规格)

### 10.1 页面加载动画序列

```
Timeline (0ms - 1500ms)
├── 0ms
│   └── 背景图淡入 (opacity 0→1, 1000ms)
├── 200ms
│   └── Logo淡入上滑 (translateY 20px→0, opacity 0→1, 600ms)
├── 400ms
│   └── 中文Slogan淡入上滑 (translateY 30px→0, opacity 0→1, 800ms)
├── 600ms
│   └── 英文Slogan淡入上滑 (translateY 20px→0, opacity 0→1, 600ms)
├── 800ms
│   └── CTA按钮缩放淡入 (scale 0.9→1, opacity 0→1, 500ms)
└── 1200ms
    └── 滚动指示器淡入 + 开始浮动动画
```

### 10.2 滚动触发动画

```javascript
// Intersection Observer 配置
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1
};

// 动画触发阈值
const animationTriggers = {
  fadeInUp: 0.2,
  scaleIn: 0.3,
  slideIn: 0.15
};

// 错开延迟
const staggerDelays = {
  cards: 100,      // 卡片之间
  listItems: 80,   // 列表项之间
  gridItems: 120,  // 网格项之间
  textLines: 50    // 文字行之间
};
```

### 10.3 性能优化

```css
/* GPU加速 */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* 动画完成后移除will-change */
.animated-element.animation-complete {
  will-change: auto;
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 附录

### A. 设计原则总结

1. **纯净如雪**: 大量使用白色和浅灰，保持界面干净清爽
2. **策略性强调**: 用芒果色和金色有策略地突出重点
3. **专业可信**: 通过排版、间距和动效传达专业感
4. **温暖服务**: 通过圆润的圆角、柔和的阴影传达温情
5. **闪电交付**: 通过流畅的动画和快速的响应传达效率

### B. 文件命名规范

```
/images
  /hero
    hero-mountain-1920x1080.jpg
    hero-city-1920x1080.jpg
    hero-wedding-1920x1080.jpg
    hero-study-1920x1080.jpg
    hero-aerial-1920x1080.jpg
  /portfolio
    /annual
      annual-01-800x1200.jpg
      annual-02-1200x800.jpg
    /event
    /conference
    /study
    /travel
    /aerial
    /wedding
    /birthday
  /team
    team-yuan-600x600.jpg
    team-zhao-600x600.jpg
    team-lu-600x600.jpg
    team-guo-600x600.jpg
  /logos
    logo-commercial.svg
    logo-snowy-owl.svg
    client-logo-01.svg
    ...
  /easter-egg
    cat-black.png
    cat-siamese.png
```

### C. 更新日志

| 版本 | 日期 | 更新内容 |
|-----|------|---------|
| 1.0 | 2024 | 初始版本，完整设计规范 |

---

*文档结束*
