# 雪弈摄影工作室 - 技术规划文档

## 1. 组件清单

### shadcn/ui 组件
| 组件名 | 用途 | 定制需求 |
|--------|------|----------|
| Button | 按钮 | 胶囊形状，自定义颜色 |
| Card | 卡片容器 | 磨砂玻璃效果 |
| Dialog | 弹窗 | 联系弹窗 |
| Input | 输入框 | 表单样式 |
| Textarea | 文本域 | 表单样式 |
| Select | 下拉选择 | 服务类型选择 |
| Sheet | 侧边浮层 | 作品详情 |
| Tabs | 标签页 | 作品分类切换 |

### 自定义组件
| 组件名 | 用途 | 复杂度 |
|--------|------|--------|
| FloatingCapsuleNav | 悬浮胶囊导航 | 高 |
| SnowchessLogo | 双Logo组件 | 中 |
| HeroCarousel | Hero轮播 | 高 |
| WorksWaterfall | 横向瀑布流 | 高 |
| WorkCard | 作品卡片(3D倾斜) | 高 |
| TeamCard | 团队卡片 | 中 |
| ClientLogos | 客户Logo墙 | 低 |
| ContactForm | 联系表单 | 中 |
| EasterEggCats | 彩蛋猫咪 | 低 |
| PixelLoader | 像素加载动画 | 中 |
| Pixel404 | 404页面 | 中 |

## 2. 动画实现规划

| 动画 | 库 | 实现方式 | 复杂度 |
|------|-----|----------|--------|
| 页面加载序列 | GSAP | Timeline + stagger | 高 |
| Hero轮播Ken Burns | CSS + GSAP | 自动播放 + 缩放动画 | 中 |
| 导航栏滚动固定 | React + CSS | useScroll hook + 条件样式 | 中 |
| 滚动触发显现 | GSAP ScrollTrigger | 视口检测 + 淡入动画 | 中 |
| 作品卡片3D倾斜 | GSAP | mousemove事件 + rotation | 高 |
| 横向瀑布流无限滚动 | GSAP | 自动滚动 + 循环逻辑 | 高 |
| 按钮Hover效果 | CSS | transition | 低 |
| 卡片Hover阴影 | CSS | transition | 低 |
| Logo灰度变彩色 | CSS | filter transition | 低 |
| 表单Focus效果 | CSS | border transition | 低 |

### 动画详细规格

**1. 页面加载动画**
```typescript
// GSAP Timeline
const tl = gsap.timeline();
tl.from('.hero-bg', { opacity: 0, duration: 0.3 })
  .from('.hero-title', { y: 30, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.1')
  .from('.nav-capsule', { y: -20, opacity: 0, duration: 0.4 }, '-=0.2')
  .from('.hero-cta', { y: 20, opacity: 0, duration: 0.4 }, '-=0.2');
```

**2. 作品卡片3D倾斜效果**
```typescript
// 鼠标位置计算旋转角度
const handleMouseMove = (e: MouseEvent) => {
  const rect = cardRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -15;
  const rotateY = ((x - centerX) / centerX) * 15;
  
  gsap.to(cardRef.current, {
    rotationX: rotateX,
    rotationY: rotateY,
    duration: 0.5,
    ease: 'power2.out',
    transformPerspective: 1000,
  });
};
```

**3. 横向瀑布流无限滚动**
```typescript
// GSAP无限滚动
gsap.to(waterfallRef.current, {
  x: '-50%',
  duration: 45,
  ease: 'none',
  repeat: -1,
});
```

**4. 滚动触发显现**
```typescript
// ScrollTrigger
ScrollTrigger.create({
  trigger: element,
  start: 'top 80%',
  onEnter: () => {
    gsap.from(element, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  },
  once: true,
});
```

## 3. 项目文件结构

```
my-app/
├── app/
│   ├── [lang]/
│   │   ├── page.tsx              # 首页
│   │   ├── works/
│   │   │   └── page.tsx          # 作品集页
│   │   ├── team/
│   │   │   └── page.tsx          # 团队页
│   │   ├── about/
│   │   │   └── page.tsx          # 关于页
│   │   ├── contact/
│   │   │   └── page.tsx          # 联系页
│   │   ├── schedule/
│   │   │   └── page.tsx          # 档期页
│   │   ├── blog/
│   │   │   └── page.tsx          # Blog页
│   │   ├── ai/
│   │   │   └── page.tsx          # AI赋能页
│   │   └── layout.tsx            # 根布局
│   ├── api/                       # API路由
│   ├── layout.tsx                 # 全局布局
│   └── globals.css                # 全局样式
├── components/
│   ├── ui/                        # shadcn组件
│   ├── navigation/
│   │   └── FloatingCapsuleNav.tsx
│   ├── brand/
│   │   └── SnowchessLogo.tsx
│   ├── hero/
│   │   └── HeroCarousel.tsx
│   ├── works/
│   │   ├── WorksWaterfall.tsx
│   │   └── WorkCard.tsx
│   ├── team/
│   │   └── TeamCard.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   ├── loading/
│   │   └── PixelLoader.tsx
│   └── easter-egg/
│       └── EasterEggCats.tsx
├── hooks/
│   ├── useScrollPosition.ts
│   └── useInView.ts
├── lib/
│   ├── utils.ts
│   └── i18n.ts
├── public/
│   ├── images/
│   │   ├── hero/                  # Hero轮播图
│   │   ├── works/                 # 作品集图片
│   │   ├── team/                  # 团队照片
│   │   └── cats/                  # 彩蛋猫咪
│   └── fonts/                     # OPPO Sans字体
├── i18n/
│   ├── messages/
│   │   ├── zh.json               # 中文翻译
│   │   └── en.json               # 英文翻译
│   └── config.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 4. 依赖清单

### 核心依赖
```bash
# 项目初始化时自动安装
next
react
react-dom
typescript
tailwindcss

# 需要额外安装
npm install gsap @gsap/react
npm install next-intl
npm install framer-motion  # 备选动画库
npm install lucide-react   # 图标库
npm install embla-carousel-react  # 轮播备选
```

### shadcn/ui 组件安装
```bash
npx shadcn add button
npx shadcn add card
npx shadcn add dialog
npx shadcn add input
npx shadcn add textarea
npx shadcn add select
npx shadcn add sheet
npx shadcn add tabs
```

## 5. 关键技术实现

### 5.1 多语言配置 (next-intl)
```typescript
// i18n/config.ts
export const locales = ['zh', 'en'];
export const defaultLocale = 'zh';

// 路由结构: / (中文) / /en/ (英文)
```

### 5.2 悬浮胶囊导航
```typescript
// 滚动检测
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// 条件样式
className={cn(
  'transition-all duration-300',
  isScrolled 
    ? 'fixed top-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/80'
    : 'absolute bottom-8 left-1/2 -translate-x-1/2 bg-transparent'
)}
```

### 5.3 双Logo系统
```typescript
// 根据路径判断Logo类型
const pathname = usePathname();
const isStudyPage = pathname.includes('study') || pathname.includes('xueyan');

// 条件渲染
{isStudyPage ? <OwlLogo /> : <BusinessLogo />}
```

### 5.4 响应式策略
| 断点 | 布局调整 |
|------|----------|
| < 640px | 单列布局，简化动画 |
| 640-768px | 2列网格 |
| 768-1024px | 3列网格 |
| > 1024px | 完整布局，全部动画 |

## 6. 性能优化

### 图片优化
- 使用 next/image 自动优化
- WebP格式
- 懒加载
- 响应式图片尺寸

### 动画优化
- 使用 transform 和 opacity
- will-change 属性
- 减少重绘
- 支持 prefers-reduced-motion

### 代码优化
- 组件懒加载
- 动态导入
- 代码分割
