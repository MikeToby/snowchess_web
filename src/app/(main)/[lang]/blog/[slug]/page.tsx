import React from 'react';
import { notFound } from 'next/navigation';
import { FloatingCapsuleNav, Footer, BlogContent } from '@/components';
import { buildMetadata } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import type { Locale } from '@/lib/site';

interface BlogDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    locale,
    path: `/blog/${slug}/`,
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { lang, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
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
