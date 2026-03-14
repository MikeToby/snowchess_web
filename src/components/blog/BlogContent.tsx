'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

interface BlogContentProps {
  post: {
    id: string;
    title: string;
    content: string;
    coverImage: string;
    images?: string[];
    author: {
      name: string;
      avatar?: string;
      bio?: string;
    };
    publishedAt: string;
    category?: string;
    readTime?: string;
  };
  locale?: string;
}

export default function BlogContent({ post, locale = 'zh' }: BlogContentProps) {
  const isZh = locale === 'zh';
  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href={`/${locale}/blog/`}
          className="inline-flex items-center gap-2 text-medium-gray hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{isZh ? '返回文章列表' : 'Back to List'}</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        {post.category && (
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-deep-black mb-6">
          {post.title}
        </h1>

        {/* Author & Meta */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            {post.author.avatar && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-medium text-deep-black">{post.author.name}</p>
              <div className="flex items-center gap-3 text-sm text-medium-gray">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.publishedAt}
                </span>
                {post.readTime && (
                  <span>· {post.readTime}</span>
                )}
              </div>
            </div>
          </div>

          <button className="p-2 rounded-full hover:bg-snow-gray transition-colors">
            <Share2 className="w-5 h-5 text-medium-gray" />
          </button>
        </div>
      </motion.header>

      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative h-[400px] rounded-2xl overflow-hidden mb-8"
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Image Gallery (if multiple images) */}
      {post.images && post.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold mb-4">{isZh ? '图片展示' : 'Gallery'}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {post.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Author Bio */}
      {post.author.bio && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-snow-cream rounded-2xl"
        >
          <h3 className="text-lg font-bold mb-2">{isZh ? '关于作者' : 'About the Author'}</h3>
          <p className="text-medium-gray">{post.author.bio}</p>
        </motion.div>
      )}
    </article>
  );
}
