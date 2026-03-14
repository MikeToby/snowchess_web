export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const siteConfig = {
  name: '雪弈摄影工作室',
  legalName: '金牛区雪弈摄影工作室（个体工商户）',
  brandNameEn: 'SnowChess Photography Studio',
  slogan: '至纯如雪，博弈瞬间',
  phone: '17341518045',
  wechat: 'Toby_T_Yuan',
  serviceArea: '全成都及其周边',
  social: {
    xiaohongshu: 'Toby_T_Yuan',
  },
  business: {
    licenseNumber: '92510106MAD10Q7FXN',
    establishedAt: '2023-10-10',
    founder: '袁天弈',
    description:
      '专注成都本地活动摄影、研学摄影、开业庆典、婚礼跟拍与旅行跟拍，用真实影像帮助机构、品牌与个人客户沉淀可传播、可复用的视觉资产。',
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.snowchess.cn',
  defaultOgImage: '/images/hero/hero-1.jpg',
} as const;

export const clientLogos = [
  { name: '理想汽车', nameEn: 'Li Auto', logo: '/images/brands/li-auto.svg' },
  { name: '平安保险', nameEn: 'Ping An Insurance', logo: '/images/brands/pingan-insurance.svg' },
  { name: '平安银行', nameEn: 'Ping An Bank', logo: '/images/brands/pingan-bank.svg' },
  { name: '中国人寿', nameEn: 'China Life', logo: '/images/brands/china-life.svg' },
  { name: '塔吉研学', nameEn: 'Taji Study', logo: '/images/brands/taji-study.svg' },
  { name: '新东方教育', nameEn: 'New Oriental Education', logo: '/images/brands/new-oriental.svg' },
  { name: '新华文轩', nameEn: 'Winshare', logo: '/images/brands/winshare-education.svg' },
  { name: '成铁轨道公司', nameEn: 'Chengtie Rail', logo: '/images/brands/chentie-rail.svg' },
] as const;

export const testimonials = [
  {
    name: '研学机构负责人',
    role: '成都本地研学项目合作方',
    quote:
      '雪弈最打动我们的不是单纯拍得好看，而是知道家长、学校和机构各自想看到什么，片子一出来就能直接用于招生和家长沟通。',
  },
  {
    name: '企业活动统筹',
    role: '品牌活动客户',
    quote:
      '现场节奏很快，但关键流程和互动细节都没有漏掉，交付也快，后续做公众号回顾、宣传海报和朋友圈传播都很顺手。',
  },
  {
    name: '开业活动主理人',
    role: '门店开业客户',
    quote:
      '从现场氛围到嘉宾互动再到品牌展示，素材覆盖得非常完整，不只是记录了活动，更帮我们把开业传播这件事做顺了。',
  },
] as const;

export function localizePath(locale: Locale, path = '/') {
  if (path === '/') {
    return `/${locale}/`;
  }

  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}
