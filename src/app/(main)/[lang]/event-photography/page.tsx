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
    path: '/event-photography/',
    title:
      locale === 'zh'
        ? '成都活动摄影_会议摄影摄像_企业活动跟拍'
        : 'Chengdu Event Photography and Conference Coverage',
    description:
      locale === 'zh'
        ? '提供成都企业活动摄影、会议摄影摄像、年会跟拍、发布会与品牌活动记录，帮助企业沉淀可传播、可复用的活动影像素材。'
        : 'Professional Chengdu event photography for conferences, annual events, launches, and brand activations.',
  });
}

export default async function EventPhotographyPage({
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
      eyebrow={isZh ? '成都活动摄影' : 'Chengdu Event Photography'}
      title={isZh ? '成都活动摄影服务' : 'Chengdu Event Photography'}
      description={
        isZh
          ? '适合企业活动、会议、年会、发布会、品牌路演与现场花絮记录。我们会从品牌露出、关键流程、来宾互动到传播素材使用场景，帮你把活动拍得更完整、更实用。'
          : 'Ideal for conferences, annual events, launches, and brand activations with reusable visual assets.'
      }
      scenarios={isZh
        ? ['企业活动', '会议摄影摄像', '品牌发布会', '年会和表彰活动', '展会与路演', '线下沙龙与论坛']
        : ['Corporate events', 'Conference coverage', 'Brand launches', 'Annual events', 'Exhibitions', 'Forums']}
      highlights={isZh
        ? ['提前沟通传播目的，现场重点不漏拍', '兼顾大场景、嘉宾互动和品牌细节', '适合公众号、海报、朋友圈和复盘资料使用', '支持成都本地项目的快速响应和高效交付']
        : ['Plan around communication needs', 'Capture both key scenes and details', 'Reusable for social and recap assets', 'Fast local response in Chengdu']}
      faqs={[
        {
          question: isZh ? '活动摄影适合只拍照片还是照片视频一起做？' : 'Photo only or photo plus video?',
          answer: isZh ? '如果活动后续要做传播或复盘，照片和视频一起规划会更完整。纯照片适合基础记录，照片加视频更适合品牌宣传。' : 'Photo plus video is best when the event will be reused for later communication or promotion.',
        },
        {
          question: isZh ? '企业活动一般建议提前多久沟通？' : 'How early should we plan?',
          answer: isZh ? '建议至少提前 3 到 7 天确认时间、流程和重点。如果是大型活动或需要多机位，越早越好。' : 'We recommend confirming at least 3 to 7 days in advance, earlier for larger events.' ,
        },
      ]}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '成都活动摄影服务',
        serviceType: 'Event Photography',
        areaServed: '成都及其周边',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.name,
          telephone: siteConfig.phone,
          url: buildPageUrl(locale, '/event-photography/'),
        },
      }}
    />
  );
}
