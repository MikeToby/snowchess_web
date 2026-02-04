import React from 'react';
import { notFound } from 'next/navigation';
import { FloatingCapsuleNav, Footer, BlogContent } from '@/components';

const samplePosts = [
  {
    id: '1',
    slug: 'wedding-photography-tips',
    title: '婚礼摄影的五个关键技巧',
    content: `
      <p>婚礼是一生中最重要的时刻之一，作为摄影师，我们的使命是用镜头捕捉每一个珍贵瞬间。</p>
      <h3>1. 提前踩点</h3>
      <p>在婚礼前一天或几天前到达场地，了解光线、背景和最佳拍摄位置。</p>
      <h3>2. 准备备用设备</h3>
      <p>婚礼没有重来的机会，所以一定要准备备用相机、电池和存储卡。</p>
      <h3>3. 抓住情感瞬间</h3>
      <p>婚礼不仅仅是仪式，更是情感的流露。关注新人、家人和宾客的情感表达。</p>
    `,
    coverImage: '/images/hero/hero-1.jpg',
    images: ['/images/hero/hero-1.jpg'],
    author: {
      name: '袁天弈',
      avatar: '/images/team/team-1.jpg',
      bio: '雪弈摄影工作室创始人，10年商业摄影经验。',
    },
    publishedAt: '2024年1月15日',
    category: '摄影技巧',
    readTime: '5分钟',
  },
];

interface BlogDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return samplePosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { lang, slug } = await params;
  const post = samplePosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <FloatingCapsuleNav locale={lang} />

      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogContent post={post} locale={lang} />
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
