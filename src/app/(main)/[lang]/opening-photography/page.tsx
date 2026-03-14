import ServicePage from '@/components/service/ServicePage';
import { buildMetadata, buildPageUrl } from '@/lib/seo';
import { siteConfig, type Locale } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  return buildMetadata({
    locale,
    path: '/opening-photography/',
    title:
      locale === 'zh'
        ? '成都开业摄影_开业活动摄影摄像'
        : 'Chengdu Opening Photography',
    description:
      locale === 'zh'
        ? '提供成都开业摄影、开业活动摄影摄像、门店开业记录与宣传素材拍摄，适合品牌开业、商场活动、门店庆典等场景。'
        : 'Opening event photography and videography for Chengdu stores, brands, and local launches.',
  });
}

export default async function OpeningPhotographyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === 'zh';
  const locale = lang as Locale;

  return (
    <ServicePage
      locale={locale}
      eyebrow={isZh ? '成都开业摄影' : 'Chengdu Opening Photography'}
      title={isZh ? '成都开业摄影摄像服务' : 'Chengdu Opening Event Coverage'}
      description={
        isZh
          ? '适合品牌门店开业、商场活动、开业庆典和线下启动仪式。除了现场热闹感，我们也会重点拍品牌露出、仪式节点和后续传播最常用的画面。'
          : 'Coverage for opening ceremonies, retail launches, and offline kickoff events with promotional value.'
      }
      scenarios={isZh
        ? ['门店开业', '品牌快闪', '商场活动', '剪彩仪式', '庆典启动', '线下推广活动']
        : ['Store openings', 'Pop-ups', 'Mall activations', 'Ribbon cutting', 'Launch ceremonies', 'Offline promotions']}
      highlights={isZh
        ? ['门头、主视觉、花篮和签到区完整记录', '剪彩、合影、来宾互动和氛围画面不遗漏', '适合朋友圈、海报、公众号和短视频二次传播', '兼顾品牌感和现场热度']
        : ['Complete coverage of visuals and signage', 'Capture ceremony moments and guests', 'Useful for social, posters, and recap assets', 'Balance brand image and crowd energy']}
      faqs={[
        {
          question: isZh ? '开业活动一定要同时做摄影和摄像吗？' : 'Do I need both photography and videography?',
          answer: isZh ? '如果后续要做宣传短视频或需要更强的传播感，建议摄影和摄像一起规划；如果只是基础记录，摄影也能满足大部分需求。' : 'Photo plus video works best for stronger post-event promotion, but photography alone can cover core documentation needs.',
        },
        {
          question: isZh ? '哪些开业画面最值得保留？' : 'Which opening shots matter most?',
          answer: isZh ? '门头、品牌露出、剪彩仪式、嘉宾合影、顾客互动和现场热闹感，通常是后续传播最常用的几类素材。' : 'Branding, ribbon cutting, guest interaction, and crowd atmosphere are usually the most reusable assets.',
        },
      ]}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '成都开业摄影摄像服务',
        serviceType: 'Opening Event Photography',
        areaServed: '成都及其周边',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.name,
          telephone: siteConfig.phone,
          url: buildPageUrl(locale, '/opening-photography/'),
        },
      }}
    />
  );
}
