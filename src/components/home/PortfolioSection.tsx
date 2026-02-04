'use client';

import React, { useState } from 'react';
import { WorksWaterfall, WorkDetailSheet, WorkCardProps } from '@/components/works';

interface PortfolioSectionProps {
  isZh: boolean;
  works: WorkCardProps[];
}

export default function PortfolioSection({ isZh, works }: PortfolioSectionProps) {
  const [selectedWork, setSelectedWork] = useState<WorkCardProps | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleWorkClick = (work: WorkCardProps) => {
    setSelectedWork(work);
    setIsSheetOpen(true);
  };

  const handleClose = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <WorksWaterfall works={works} onWorkClick={handleWorkClick} />
      
      <WorkDetailSheet
        work={selectedWork}
        isOpen={isSheetOpen}
        onClose={handleClose}
        allImages={selectedWork?.allImages}
        description={isZh ? '这是我们为您精心记录的美好瞬间。' : 'These are the beautiful moments we captured for you.'}
        pricing={isZh ? '咨询客服获取报价' : 'Contact us for pricing'}
        photographer={isZh ? 'SnowChess Team' : 'SnowChess Team'}
      />
    </>
  );
}
