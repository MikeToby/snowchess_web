import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { FloatingCapsuleNav, Footer } from '@/components';
import { JsonLd } from '@/components/seo';
import HeroCarousel from '@/components/home/HeroCarousel';
import PortfolioSection from '@/components/home/PortfolioSection';
import { TeamCard } from '@/components/team';
import { TeamMember } from '@/components/team';
import { getWorksData } from '@/lib/works-db';
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
    title:
      locale === 'zh'
        ? '成都活动摄影_成都研学摄影_雪弈摄影工作室'
        : 'Chengdu Event Photography and Study Tour Coverage | SnowChess',
    description:
      locale === 'zh'
        ? '雪弈摄影工作室专注成都活动摄影、研学摄影、开业摄影、婚礼跟拍与旅行跟拍，服务全成都及其周边，帮助品牌、机构和个人客户记录高质量影像。'
        : 'SnowChess focuses on Chengdu event, study tour, opening, wedding, and travel photography services for brands, institutions, and individuals.',
  });
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '袁天弈',
    nameEn: 'Yuan Tianyi',
    title: '创始人 / 首席摄影师',
    titleEn: 'Founder / Lead Photographer',
    bio: '10年商业摄影经验，专注品牌视觉塑造。曾为多家知名企业提供视觉解决方案。',
    image: '/images/team/team-1.jpg',
    skills: ['商业摄影', '婚礼跟拍', '品牌视觉'],
    xiaohongshuName: '@袁天弈摄影',
  },
  {
    id: '2',
    name: '赵本志',
    nameEn: 'Zhao Benzhi',
    title: '商业摄影总监',
    titleEn: 'Commercial Director',
    bio: '曾任4A广告公司视觉总监，服务过众多国际品牌，擅长商业广告摄影。',
    image: '/images/team/team-2.jpg',
    skills: ['活动摄影', '航拍', '广告摄影'],
    xiaohongshuName: '@赵本志视觉',
  },
  {
    id: '3',
    name: '陆金川',
    nameEn: 'Lu Jinchuan',
    title: '人像摄影专家',
    titleEn: 'Portrait Specialist',
    bio: '擅长捕捉人物情感，作品多次入选国际摄影展。专注于人像与旅行摄影。',
    image: '/images/team/team-3.jpg',
    skills: ['旅行摄影', '人像', '情感捕捉'],
    xiaohongshuName: '@陆金川镜头',
  },
  {
    id: '4',
    name: '郭晨曦',
    nameEn: 'Guo Chenxi',
    title: '活动摄影主管',
    titleEn: 'Event Lead',
    bio: '快速抓拍专家，大型活动经验丰富。研学摄影与视频制作领域专家。',
    image: '/images/team/team-4.jpg',
    skills: ['研学摄影', '视频制作', '活动记录'],
    xiaohongshuName: '@郭晨曦记录',
  },
];

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const isZh = lang === 'zh';
  const locale = lang as Locale;
  const works = await getWorksData();
  const pageUrl = buildPageUrl(locale);
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      telephone: siteConfig.phone,
      areaServed: siteConfig.serviceArea,
      url: pageUrl,
      image: `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: '成都',
        addressRegion: '四川',
        addressCountry: 'CN',
      },
      sameAs: [],
      description: siteConfig.business.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      url: pageUrl,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'customer service',
        areaServed: 'CN-SC',
        availableLanguage: ['zh-CN', 'en'],
      },
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={structuredData} />
      <FloatingCapsuleNav locale={lang} />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images Carousel */}
        <HeroCarousel />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            {isZh ? '至纯如雪，博弈瞬间' : 'Pure Vision. Strategic Capture.'}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-3 text-center">
            {isZh ? '成都活动摄影 · 研学摄影 · 开业庆典 · 婚礼跟拍' : 'Chengdu Event, Study Tour, Opening, Wedding'}
          </p>
          <p className="text-base md:text-lg text-white/70 mb-8 text-center max-w-3xl">
            {isZh
              ? '服务全成都及其周边，用真实影像记录品牌活动、研学项目、开业现场与重要人生时刻。'
              : 'Serving Chengdu and nearby with documentary visuals for events, study tours, openings, and life moments.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#portfolio"
              className="px-8 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold-light transition-all hover:scale-105"
            >
              {isZh ? '查看作品集' : 'View Portfolio'}
            </Link>
            <Link
              href={`/${lang}/contact/`}
              className="px-8 py-4 rounded-full font-semibold border border-white/40 text-white hover:bg-white/10 transition-all"
            >
              {isZh ? '联系咨询' : 'Contact Us'}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-snow-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-4">
            {isZh ? '精选作品' : 'Selected Works'}
          </h2>
          <p className="text-center text-medium-gray">
            {isZh ? '每一帧都是故事' : 'Every frame tells a story'}
          </p>
        </div>

        {/* Horizontal Waterfall */}
        <PortfolioSection isZh={isZh} works={works} />
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '核心服务场景' : 'Core Service Scenarios'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '围绕成都本地活动、研学与重要节点，提供更实用的影像服务。' : 'Practical visual coverage built around Chengdu events, study tours, and milestone moments.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                href: `/${lang}/event-photography/`,
                title: isZh ? '成都活动摄影' : 'Event Photography',
                desc: isZh ? '适合会议、年会、发布会、品牌活动与企业现场记录。' : 'For conferences, annual events, launches, and brand activations.',
              },
              {
                href: `/${lang}/study-tour-photography/`,
                title: isZh ? '成都研学摄影' : 'Study Tour Photography',
                desc: isZh ? '帮助机构呈现服务细节、活动秩序与学生成长瞬间。' : 'Capture service detail, safety, order, and student growth.',
              },
              {
                href: `/${lang}/opening-photography/`,
                title: isZh ? '成都开业摄影' : 'Opening Photography',
                desc: isZh ? '门店开业、庆典活动与品牌传播素材一站式记录。' : 'Opening ceremonies and promotional materials for local brands.',
              },
              {
                href: `/${lang}/wedding-photography/`,
                title: isZh ? '成都婚礼跟拍' : 'Wedding Coverage',
                desc: isZh ? '保留情绪与纪实氛围，记录重要人生时刻。' : 'Document emotional, candid moments for meaningful occasions.',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-3xl border border-snow-gray bg-snow-cream p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-deep-black group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-medium-gray leading-7">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '核心团队' : 'Our Team'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '专业摄影师，用心记录每个瞬间' : 'Professional photographers capturing your moments'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Trust Section */}
      <section className="py-20 bg-snow-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '品牌合作' : 'Trusted By'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '感谢以下品牌对我们的信任' : 'Thank you to these brands for trusting us'}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">500+</div>
              <div className="text-medium-gray">{isZh ? '满意客户' : 'Happy Clients'}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">10,000+</div>
              <div className="text-medium-gray">{isZh ? '精彩瞬间' : 'Moments Captured'}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-medium-gray">{isZh ? '满意度' : 'Satisfaction'}</div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
              >
                <Image
                  src={client.logo}
                  alt={isZh ? client.name : client.nameEn}
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '客户反馈' : 'Client Feedback'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '我们更在意这些内容是否真正帮客户解决了传播、信任和留存问题。' : 'We care about whether the visuals genuinely support trust, communication, and business use.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <section className="py-20 bg-snow-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '常见问题' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: isZh ? '你们主要服务成都哪些区域？' : 'Which areas do you serve in Chengdu?',
                a: isZh ? `我们以成都本地为主，覆盖全成都及其周边，可根据活动地点和时间安排机动服务。` : `We primarily serve Chengdu and nearby areas, with flexible coverage based on event schedule and location.`,
              },
              {
                q: isZh ? '适合合作的客户类型有哪些？' : 'What types of clients are a good fit?',
                a: isZh ? '适合企业活动、研学机构、学校、品牌门店开业，以及有纪实记录需求的婚礼和旅行客户。' : 'Ideal for brands, institutions, study tour organizers, schools, opening events, weddings, and travel documentation needs.',
              },
              {
                q: isZh ? '如何联系和沟通需求？' : 'How can we discuss the project?',
                a: isZh ? `可直接电话 ${siteConfig.phone} 或添加微信 ${siteConfig.wechat}，先沟通场景、重点和交付需求。` : `You can call ${siteConfig.phone} or reach out on WeChat ${siteConfig.wechat} to discuss scope, priorities, and delivery needs.`,
              },
            ].map((faq) => (
              <article key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-deep-black">{faq.q}</h3>
                <p className="mt-3 text-medium-gray leading-7">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
