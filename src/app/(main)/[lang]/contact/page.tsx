import Link from 'next/link';
import { MapPin, MessageCircle, PhoneCall } from 'lucide-react';
import { FloatingCapsuleNav, Footer } from '@/components';
import { JsonLd } from '@/components/seo';
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
    path: '/contact/',
    title:
      locale === 'zh'
        ? '联系雪弈摄影工作室_成都摄影服务咨询'
        : 'Contact SnowChess Photography Studio',
    description:
      locale === 'zh'
        ? '联系雪弈摄影工作室，咨询成都活动摄影、研学摄影、开业摄影、婚礼跟拍与旅行跟拍服务，支持本地预约与项目沟通。'
        : 'Contact SnowChess for Chengdu event, study tour, opening, wedding, and travel photography services.',
  });
}

export default async function ContactPage({
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
          '@type': 'ContactPage',
          name: isZh ? '联系雪弈摄影工作室' : 'Contact SnowChess',
          url: buildPageUrl(locale, '/contact/'),
        }}
      />
      <FloatingCapsuleNav locale={lang} />

      <section className="pt-32 pb-16 bg-snow-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-black">
            {isZh ? '联系雪弈摄影工作室' : 'Contact SnowChess'}
          </h1>
          <p className="mt-6 text-lg leading-8 text-medium-gray">
            {isZh
              ? '如果你已经有活动时间、研学计划、开业节点或拍摄需求，可以直接电话或微信沟通。'
              : 'If you already have a date, event, or shooting need, contact us directly by phone or WeChat.'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl bg-snow-cream p-8 shadow-sm min-h-[220px]">
            <PhoneCall className="w-6 h-6 text-gold" />
            <h2 className="mt-4 text-2xl font-bold text-deep-black">{isZh ? '电话咨询' : 'Phone'}</h2>
            <a href={`tel:${siteConfig.phone}`} className="mt-4 block text-lg text-soft-black hover:text-gold transition-colors">
              {siteConfig.phone}
            </a>
          </article>
          <article className="rounded-3xl bg-snow-cream p-8 shadow-sm min-h-[220px]">
            <MessageCircle className="w-6 h-6 text-gold" />
            <h2 className="mt-4 text-2xl font-bold text-deep-black">{isZh ? '微信沟通' : 'WeChat'}</h2>
            <p className="mt-4 text-lg text-soft-black">{siteConfig.wechat}</p>
          </article>
          <article className="rounded-3xl bg-snow-cream p-8 shadow-sm min-h-[220px]">
            <MapPin className="w-6 h-6 text-gold" />
            <h2 className="mt-4 text-2xl font-bold text-deep-black">{isZh ? '服务范围' : 'Service area'}</h2>
            <p className="mt-4 text-soft-black leading-7">
              {isZh ? siteConfig.serviceArea : `Serving ${siteConfig.serviceArea}`}
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 bg-snow-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-deep-black">
              {isZh ? '适合先沟通这些信息' : 'Helpful details to send first'}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                isZh ? '活动/拍摄类型' : 'Project type',
                isZh ? '活动日期与时长' : 'Date and duration',
                isZh ? '拍摄地点' : 'Location',
                isZh ? '想重点记录的内容' : 'Key moments to capture',
                isZh ? '是否需要照片、视频或都要' : 'Photo, video, or both',
                isZh ? '预算范围与交付预期' : 'Budget and delivery expectation',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-snow-cream px-5 py-4 text-soft-black">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center rounded-full bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-light transition-colors"
              >
                {isZh ? '立即电话咨询' : 'Call now'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
