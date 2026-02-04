'use client';

import React, { useRef, useEffect } from 'react';
import WorkCard, { WorkCardProps } from './WorkCard';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

interface WorksWaterfallProps {
  works: WorkCardProps[];
  onWorkClick?: (work: WorkCardProps) => void;
}

export default function WorksWaterfall({ works, onWorkClick }: WorksWaterfallProps) {
  const scrollRef = useHorizontalScroll<HTMLDivElement>();
  
  // Split works into two rows - alternating vertical and horizontal
  const topRow = works.filter((_, index) => index % 2 === 0).map(work => ({
    ...work,
    aspectRatio: 'vertical' as const,
  }));
  
  const bottomRow = works.filter((_, index) => index % 2 === 1).map(work => ({
    ...work,
    aspectRatio: 'horizontal' as const,
  }));

  // Duplicate for infinite scroll effect
  const duplicatedTopRow = [...topRow, ...topRow, ...topRow];
  const duplicatedBottomRow = [...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Row - Vertical cards, scrolls left */}
      <div className="mb-6 overflow-hidden">
        <div 
          className="flex gap-6 animate-scroll-infinite hover-pause"
          style={{ width: 'max-content' }}
        >
          {duplicatedTopRow.map((work, index) => (
            <WorkCard
              key={`top-${work.id}-${index}`}
              {...work}
              aspectRatio="vertical"
              onClick={() => onWorkClick?.(work)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Row - Horizontal cards, scrolls right (reverse) */}
      <div className="overflow-hidden">
        <div 
          className="flex gap-6 animate-scroll-infinite-reverse hover-pause"
          style={{ width: 'max-content' }}
        >
          {duplicatedBottomRow.map((work, index) => (
            <WorkCard
              key={`bottom-${work.id}-${index}`}
              {...work}
              aspectRatio="horizontal"
              onClick={() => onWorkClick?.(work)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Alternative: Manual scroll version with GSAP
export function WorksWaterfallManual({ works, onWorkClick }: WorksWaterfallProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // Split works
  const topRow = works.filter((_, index) => index % 2 === 0);
  const bottomRow = works.filter((_, index) => index % 2 === 1);
  
  const duplicatedTopRow = [...topRow, ...topRow, ...topRow];
  const duplicatedBottomRow = [...bottomRow, ...bottomRow, ...bottomRow];

  useEffect(() => {
    // This would use GSAP in a real implementation
    // For now, using CSS animations
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-4">
      {/* Top Row */}
      <div className="mb-6 overflow-visible">
        <div 
          ref={topRowRef}
          className="flex gap-6"
          style={{
            animation: 'scrollLeft 40s linear infinite',
            width: 'max-content',
          }}
        >
          {duplicatedTopRow.map((work, index) => (
            <WorkCard
              key={`top-${work.id}-${index}`}
              {...work}
              aspectRatio="vertical"
              onClick={() => onWorkClick?.(work)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="overflow-visible">
        <div 
          ref={bottomRowRef}
          className="flex gap-6"
          style={{
            animation: 'scrollRight 35s linear infinite',
            width: 'max-content',
          }}
        >
          {duplicatedBottomRow.map((work, index) => (
            <WorkCard
              key={`bottom-${work.id}-${index}`}
              {...work}
              aspectRatio="horizontal"
              onClick={() => onWorkClick?.(work)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        div:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
