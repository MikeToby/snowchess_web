'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  category?: string;
  readTime?: string;
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  locale?: string;
}

export default function BlogCard({ post, index = 0, locale = 'zh' }: BlogCardProps) {
  const isZh = locale === 'zh';
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/${locale}/blog/${post.slug}/`} className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Cover Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {post.category && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h3 className="text-xl font-bold text-deep-black mb-2 group-hover:text-gold transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-medium-gray text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-light-gray">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author.name}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.publishedAt}
                </span>
              </div>
              {post.readTime && (
                <span>{post.readTime}</span>
              )}
            </div>

            {/* Read More */}
            <div className="mt-4 flex items-center text-gold font-medium text-sm group-hover:gap-2 transition-all">
              <span>{isZh ? '阅读更多' : 'Read More'}</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
