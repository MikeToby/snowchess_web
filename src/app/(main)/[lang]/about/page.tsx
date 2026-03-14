import Image from 'next/image';
import { JsonLd } from '@/components/seo';
import { FloatingCapsuleNav, Footer } from '@/components';
import { buildMetadata, buildPageUrl } from '@/lib/seo';
import { clientLogos, siteConfig, testimonials, type Locale } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  return buildMetadata({
    locale,
    path: '/about/',
    title:
      locale === 'zh'
        ? '雪弈摄影工作室_成都本地摄影服务团队'
        : 'About SnowChess Photography Studio',
    description:
      locale === 'zh'
        ? '雪弈摄影工作室扎根成都，提供活动摄影、研学摄影、开业摄影、婚礼跟拍与旅行跟拍服务，服务企业、机构与个人客户。'
        : 'SnowChess is a Chengdu-based photography studio serving brands, institutions, and personal clients.',
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === 'zh';
  const locale = lang as Locale;

  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: isZh ? '关于雪弈摄影工作室' : 'About SnowChess Photography Studio',
          url: buildPageUrl(locale, '/about/'),
          description: siteConfig.business.description,
        }}
      />
      <FloatingCapsuleNav locale={lang} />

      <section className="pt-32 pb-16 bg-snow-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-black">
            {isZh ? '关于雪弈摄影工作室' : 'About SnowChess'}
          </h1>
          <p className="mt-6 text-lg leading-8 text-medium-gray">
            {isZh
              ? `${siteConfig.legalName}扎根成都，专注活动摄影、研学摄影、开业庆典、婚礼跟拍与旅行跟拍，用真实影像帮助客户做传播、做记录，也做信任背书。`
              : `${siteConfig.legalName} is based in Chengdu, focused on event, study tour, opening, wedding, and travel photography.`}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl bg-snow-cream p-8">
            <h2 className="text-2xl font-bold text-deep-black">{isZh ? '品牌定位' : 'Positioning'}</h2>
            <p className="mt-4 text-medium-gray leading-7">
              {isZh ? '不是只拍得好看，而是把活动价值、服务细节和真实氛围拍得可传播、可复用。' : 'We focus on visuals that are reusable, communicative, and documentary in value.'}
            </p>
          </article>
          <article className="rounded-3xl bg-snow-cream p-8">
            <h2 className="text-2xl font-bold text-deep-black">{isZh ? '服务范围' : 'Service Area'}</h2>
            <p className="mt-4 text-medium-gray leading-7">
              {isZh ? `目前主要服务${siteConfig.serviceArea}，面向企业活动、教育研学、开业庆典和高需求纪实跟拍。` : `Serving ${siteConfig.serviceArea} for events, education, openings, and documentary coverage.`}
            </p>
          </article>
          <article className="rounded-3xl bg-snow-cream p-8">
            <h2 className="text-2xl font-bold text-deep-black">{isZh ? '联系信息' : 'Contact'}</h2>
            <p className="mt-4 text-medium-gray leading-7">
              {isZh ? `电话 ${siteConfig.phone}，微信 ${siteConfig.wechat}。` : `Phone ${siteConfig.phone}, WeChat ${siteConfig.wechat}.`}
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 bg-snow-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-black text-center">
            {isZh ? '合作客户' : 'Client Trust'}
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
            {clientLogos.map((client) => (
              <div key={client.name} className="rounded-2xl bg-white p-6 flex items-center justify-center shadow-sm">
                <Image src={client.logo} alt={client.name} width={160} height={48} className="max-h-10 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-black text-center">
            {isZh ? '客户评价' : 'Testimonials'}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl bg-snow-cream p-6 shadow-sm">
                <p className="text-soft-black leading-7">“{item.quote}”</p>
                <div className="mt-5">
                  <p className="font-semibold text-deep-black">{item.name}</p>
                  <p className="text-sm text-medium-gray">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
