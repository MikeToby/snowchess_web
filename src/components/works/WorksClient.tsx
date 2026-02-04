'use client';

import React, { useState } from 'react';
import { FloatingCapsuleNav, Footer, WorkCard, WorkDetailSheet } from '@/components';
import { WorkCardProps } from '@/components/works';

const categories = [
  { id: 'all', label: '全部', labelEn: 'All' },
  { id: 'annual', label: '年会活动', labelEn: 'Annual Events' },
  { id: 'study', label: '研学', labelEn: 'Study Tour' },
  { id: 'travel', label: '旅行', labelEn: 'Travel' },
  { id: 'wedding', label: '婚礼', labelEn: 'Wedding' },
  { id: 'birthday', label: '生日宴', labelEn: 'Birthday' },
  { id: 'aerial', label: '航拍', labelEn: 'Aerial' },
  { id: 'conference', label: '会议', labelEn: 'Conference' },
];

interface WorksClientProps {
  works: WorkCardProps[];
  lang: string;
}

export default function WorksClient({ works, lang }: WorksClientProps) {
  const isZh = lang === 'zh';
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<WorkCardProps | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredWorks = activeCategory === 'all'
    ? works
    : works.filter(work => work.category === activeCategory);

  const handleWorkClick = (work: WorkCardProps) => {
    setSelectedWork(work);
    setIsDetailOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <FloatingCapsuleNav locale={lang} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-snow-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            {isZh ? '作品集' : 'Portfolio'}
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            {isZh ? '每一帧都是故事，每一个瞬间都值得被记录' : 'Every frame tells a story, every moment worth capturing'}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-snow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold text-white'
                    : 'bg-snow-gray text-soft-black hover:bg-gold/10 hover:text-gold'
                }`}
              >
                {isZh ? cat.label : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-16 bg-snow-cream min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredWorks.map((work) => (
              <div key={work.id} className="flex justify-center">
                <WorkCard
                  {...work}
                  aspectRatio="vertical"
                  onClick={() => handleWorkClick(work)}
                />
              </div>
            ))}
          </div>
          
          {filteredWorks.length === 0 && (
            <div className="text-center text-medium-gray py-12">
              {isZh ? '暂无该分类作品' : 'No works found in this category'}
            </div>
          )}
        </div>
      </section>

      {/* Work Detail Sheet */}
      <WorkDetailSheet
        work={selectedWork}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        allImages={selectedWork?.allImages}
        pricing="商业摄影：1000-3000元/场"
        description="这是一组精心拍摄的商业摄影作品，展现了专业的摄影技术和独特的视觉风格。"
        photographer="袁天弈"
      />

      <Footer locale={lang} />
    </main>
  );
}
