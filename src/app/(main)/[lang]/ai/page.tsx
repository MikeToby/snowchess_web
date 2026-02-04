import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wand2, Image as ImageIcon, User, Radio, Sparkles } from 'lucide-react';
import { FloatingCapsuleNav, Footer } from '@/components';

const aiFeatures = [
  {
    icon: Wand2,
    title: 'AI照片编辑',
    titleEn: 'AI Photo Editing',
    desc: '智能调色、构图优化，让每张照片都达到专业水准',
    descEn: 'Smart color grading and composition optimization',
  },
  {
    icon: ImageIcon,
    title: 'AI照片修复',
    titleEn: 'AI Photo Restoration',
    desc: '老照片修复、瑕疵去除，重现珍贵记忆',
    descEn: 'Restore old photos and remove imperfections',
  },
  {
    icon: User,
    title: 'AI人像修图',
    titleEn: 'AI Portrait Retouching',
    desc: '智能美颜、皮肤优化，自然不失真',
    descEn: 'Smart beauty enhancement, natural results',
  },
  {
    icon: Radio,
    title: 'AI照片直播',
    titleEn: 'AI Photo Live',
    desc: '活动现场实时处理，即时分享精彩瞬间',
    descEn: 'Real-time event processing and sharing',
  },
];

const beforeAfterExamples = [
  {
    title: 'AI照片修复',
    titleEn: 'AI Restoration',
    desc: '老照片修复，重现珍贵记忆',
    descEn: 'Restore old photos',
    beforeImage: '/images/hero/hero-1.jpg',
    afterImage: '/images/hero/hero-2.jpg',
  },
  {
    title: 'AI人像修图',
    titleEn: 'AI Portrait',
    desc: '智能美颜，自然优化',
    descEn: 'Smart beauty enhancement',
    beforeImage: '/images/hero/hero-3.jpg',
    afterImage: '/images/hero/hero-4.jpg',
  },
];

interface AIPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AIPage({ params }: AIPageProps) {
  const { lang } = await params;
  const isZh = lang === 'zh';

  return (
    <main className="min-h-screen bg-white">
      <FloatingCapsuleNav locale={lang} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-deep-black">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-mango rounded-full blur-[120px] opacity-30" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-gold" />
            <span className="text-gold font-semibold tracking-wider">AI POWERED</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {isZh ? 'AI 赋能雪弈' : 'AI Empowered'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {isZh 
              ? '人工智能技术与专业摄影的完美结合' 
              : 'Where artificial intelligence meets professional photography'}
          </p>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-20 bg-snow-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? 'AI 功能' : 'AI Features'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '智能技术，让摄影更简单' : 'Smart technology makes photography easier'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {isZh ? feature.title : feature.titleEn}
                </h3>
                <p className="text-medium-gray text-sm">
                  {isZh ? feature.desc : feature.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '效果对比' : 'Before & After'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '拖动滑块查看AI处理效果' : 'Drag the slider to see AI processing results'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfterExamples.map((example, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {isZh ? example.title : example.titleEn}
                  </h3>
                  <p className="text-medium-gray text-sm">
                    {isZh ? example.desc : example.descEn}
                  </p>
                </div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                  <Image
                    src={example.afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-snow-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '服务流程' : 'How It Works'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '简单四步，轻松获取专业照片' : 'Four simple steps to professional photos'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: isZh ? '上传照片' : 'Upload', desc: isZh ? '选择需要处理的照片' : 'Select photos' },
              { step: '02', title: isZh ? 'AI分析' : 'Analyze', desc: isZh ? 'AI智能识别照片内容' : 'AI analyzes content' },
              { step: '03', title: isZh ? '智能处理' : 'Process', desc: isZh ? '自动优化照片效果' : 'Auto-optimize' },
              { step: '04', title: isZh ? '下载成品' : 'Download', desc: isZh ? '获取处理后的照片' : 'Get photos' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-gold font-bold text-2xl mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-medium-gray text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isZh ? '体验AI摄影的魅力' : 'Experience AI Photography'}
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            {isZh 
              ? '立即预约，享受AI赋能的专业摄影服务' 
              : 'Book now for AI-powered professional photography'}
          </p>
          <Link
            href={`/${lang}/schedule/`}
            className="inline-block px-8 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold-light transition-all hover:scale-105"
          >
            {isZh ? '立即咨询' : 'Contact Us'}
          </Link>
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
