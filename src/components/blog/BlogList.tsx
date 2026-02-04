'use client';

import React from 'react';
import BlogCard, { BlogPost } from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
  locale?: string;
}

export default function BlogList({ posts, locale = 'zh' }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-medium-gray text-lg">
          {locale === 'zh' ? '暂无文章' : 'No posts yet'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-medium-gray">
        {locale === 'zh' ? `${posts.length} 条日志` : `${posts.length} posts`}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} locale={locale} />
        ))}
      </div>
    </div>
  );
}
