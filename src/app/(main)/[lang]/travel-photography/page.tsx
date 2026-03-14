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
    path: '/travel-photography/',
    title:
      locale === 'zh'
        ? '成都旅行跟拍_旅拍跟拍_街拍记录'
        : 'Chengdu Travel Photography',
    description:
      locale === 'zh'
        ? '提供成都旅行跟拍、旅拍与街拍记录服务，适合情侣、朋友、个人与外地来蓉游客，轻松记录成都城市氛围与旅程故事。'
        : 'Travel and street-style documentary photography in Chengdu for couples, friends, and visitors.',
  });
}

export default async function TravelPhotographyPage({
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
      eyebrow={isZh ? '成都旅行跟拍' : 'Chengdu Travel Photography'}
      title={isZh ? '成都旅行跟拍服务' : 'Chengdu Travel Documentary Photography'}
      description={
        isZh
          ? '适合外地来蓉游客、情侣、朋友和想在成都留下自然旅程记录的人。比传统旅拍更轻松，更像跟着旅程一起发生的真实画面。'
          : 'Natural travel coverage for visitors, couples, and friends exploring Chengdu.'
      }
      scenarios={isZh
        ? ['城市街拍', '情侣旅行', '朋友出游', '成都本地旅拍', '探店和路线记录', '轻纪实旅行影像']
        : ['City street sessions', 'Couple travel', 'Friends trips', 'Local Chengdu travel', 'Route documentation', 'Light documentary travel']}
      highlights={isZh
        ? ['更自然，不依赖大量摆拍', '结合路线和场景给出轻度拍摄建议', '适合轻松逛拍与城市漫游', '保留旅程氛围和人物状态']
        : ['Natural over heavily posed', 'Light guidance based on route and scene', 'Good for relaxed city walks', 'Preserves atmosphere and mood']}
      faqs={[
        {
          question: isZh ? '旅行跟拍适合哪些人？' : 'Who is travel coverage best for?',
          answer: isZh ? '适合不想拍得太商业、但又希望保留旅程氛围和自然状态的情侣、朋友和个人。' : 'Great for people who want natural travel memories without overly commercial posing.' ,
        },
        {
          question: isZh ? '需要提前规划路线吗？' : 'Should we plan the route in advance?',
          answer: isZh ? '建议提前沟通大致路线和风格，这样更容易把拍摄和旅程节奏结合起来，既轻松也更出片。' : 'A rough route and style discussion helps keep the shoot relaxed and productive.' ,
        },
      ]}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '成都旅行跟拍服务',
        serviceType: 'Travel Photography',
        areaServed: '成都及其周边',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.name,
          telephone: siteConfig.phone,
          url: buildPageUrl(locale, '/travel-photography/'),
        },
      }}
    />
  );
}
