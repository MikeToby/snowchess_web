'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

export interface WorkCardProps {
  id: string;
  image: string;
  thumbnailImage?: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryLabel?: string;
  allImages?: string[];
  aspectRatio?: 'vertical' | 'horizontal';
  onClick?: () => void;
}

export default function WorkCard(props: WorkCardProps) {
  const {
    image,
    thumbnailImage,
    title,
    titleEn,
    category,
    categoryLabel,
    aspectRatio = 'horizontal',
    onClick,
  } = props;
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max ±15 degrees)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg) scale(1)');
  };

  const aspectClass = aspectRatio === 'vertical' 
    ? 'aspect-[3/4]' 
    : 'aspect-[4/3]';

  const categoryColor = category === 'study' ? 'bg-mango/20 text-mango' : 'bg-gold/20 text-gold';

  return (
    <div
      ref={cardRef}
      className="relative perspective-1000 cursor-pointer flex-shrink-0 w-full max-w-[18rem]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-out preserve-3d bg-white ${aspectClass}`}
        style={{ 
          transform: transform,
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src={thumbnailImage || image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 288px"
        />

        {/* Glare Effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
        />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${categoryColor}`}>
            {categoryLabel || category}
          </span>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          {titleEn && (
            <p className="text-white/70 text-sm">{titleEn}</p>
          )}
        </div>
      </div>
    </div>
  );
}
