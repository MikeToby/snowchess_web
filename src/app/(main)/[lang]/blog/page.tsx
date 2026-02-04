import React from 'react';
import { FloatingCapsuleNav, Footer, BlogList } from '@/components';
import { BlogPost } from '@/components/blog';

const samplePosts: BlogPost[] = [
  {
    id: '1',
    slug: 'wedding-photography-tips',
    title: '婚礼摄影的五个关键技巧',
    excerpt: '婚礼是一生中最重要的时刻之一，本文分享五个关键技巧，帮助摄影师捕捉每一个珍贵瞬间...',
    coverImage: '/images/hero/hero-1.jpg',
    author: { name: '袁天弈' },
    publishedAt: '2024-01-15',
    category: '摄影技巧',
    readTime: '5分钟',
  },
  {
    id: '2',
    slug: 'study-tour-photography',
    title: '研学摄影：记录成长的力量',
    excerpt: '研学旅行是孩子们开阔视野的重要经历，如何用镜头记录他们的成长与收获？',
    coverImage: '/images/hero/hero-2.jpg',
    author: { name: '郭晨曦' },
    publishedAt: '2024-01-10',
    category: '研学摄影',
    readTime: '8分钟',
  },
  {
    id: '3',
    slug: 'ai-photography-future',
    title: 'AI赋能：摄影行业的未来',
    excerpt: '人工智能技术正在改变摄影行业，从自动修图到智能构图，AI如何助力摄影师创作？',
    coverImage: '/images/hero/hero-3.jpg',
    author: { name: '赵本志' },
    publishedAt: '2024-01-05',
    category: 'AI技术',
    readTime: '6分钟',
  },
];

interface BlogPageProps {
  params: Promise<{ lang: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;
  const isZh = lang === 'zh';

  return (
    <main className="min-h-screen bg-white">
      <FloatingCapsuleNav locale={lang} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-snow-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            {isZh ? '摄影师Blog' : "Photographer's Blog"}
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            {isZh 
              ? '摄影技巧、作品分享、行业见解' 
              : 'Photography tips, work sharing, industry insights'}
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList posts={samplePosts} locale={lang} />
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
