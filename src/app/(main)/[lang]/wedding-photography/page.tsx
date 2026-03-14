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
    path: '/wedding-photography/',
    title:
      locale === 'zh'
        ? '成都婚礼跟拍_婚礼纪实摄影'
        : 'Chengdu Wedding Photography',
    description:
      locale === 'zh'
        ? '提供成都婚礼跟拍与婚礼纪实记录服务，适合婚礼、订婚、婚宴与仪式拍摄，记录真实情绪与关键瞬间。'
        : 'Wedding documentary coverage in Chengdu for ceremonies, banquets, and intimate moments.',
  });
}

export default async function WeddingPhotographyPage({
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
      eyebrow={isZh ? '成都婚礼跟拍' : 'Chengdu Wedding Coverage'}
      title={isZh ? '成都婚礼跟拍服务' : 'Chengdu Wedding Documentary Photography'}
      description={
        isZh
          ? '婚礼拍摄更重要的是情绪、关系和纪实感。我们会把新人的互动、家人的情绪、仪式节点和现场氛围完整串联起来。'
          : 'Wedding coverage focused on emotion, candid relationships, and documentary storytelling.'
      }
      scenarios={isZh
        ? ['婚礼仪式', '婚宴记录', '订婚宴', '迎亲与接亲', '亲友互动', '纪实婚礼跟拍']
        : ['Ceremonies', 'Banquets', 'Engagements', 'Preparation coverage', 'Family interaction', 'Documentary weddings']}
      highlights={isZh
        ? ['强调真实互动而非摆拍堆砌', '保留情绪节点和关键人物关系', '适合纪实风格新人和重视氛围感的婚礼', '可兼顾照片与短视频素材输出']
        : ['Emphasis on candid interaction', 'Preserve emotional relationships', 'Suited for documentary-style weddings', 'Can support both photo and short video output']}
      faqs={[
        {
          question: isZh ? '婚礼跟拍更适合纪实还是摆拍？' : 'Documentary or posed wedding style?',
          answer: isZh ? '大多数新人更适合以纪实为主、少量引导为辅，这样既保留真实情绪，也能兼顾画面完成度。' : 'Most couples benefit from documentary coverage with light direction when needed.' ,
        },
        {
          question: isZh ? '婚礼当天哪些瞬间最容易被忽略？' : 'What moments are often missed?',
          answer: isZh ? '很多容易被忽略的是父母、伴郎伴娘、好友互动和仪式前后的情绪变化，这些往往最打动人。' : 'Family reactions, friend interactions, and emotional transitions are often the most meaningful.' ,
        },
      ]}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '成都婚礼跟拍服务',
        serviceType: 'Wedding Photography',
        areaServed: '成都及其周边',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.name,
          telephone: siteConfig.phone,
          url: buildPageUrl(locale, '/wedding-photography/'),
        },
      }}
    />
  );
}
