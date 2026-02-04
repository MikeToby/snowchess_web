'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Calendar, Tag } from 'lucide-react';
import { WorkCardProps } from './WorkCard';

interface WorkDetailSheetProps {
  work: WorkCardProps | null;
  isOpen: boolean;
  onClose: () => void;
  allImages?: string[];
  pricing?: string;
  description?: string;
  photographer?: string;
}

export default function WorkDetailSheet({
  work,
  isOpen,
  onClose,
  allImages = [],
  pricing,
  description,
  photographer,
}: WorkDetailSheetProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!work) return null;

  const images = allImages.length > 0 ? allImages : [work.image];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
            >
              <X className="w-6 h-6 text-deep-black" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-[50vh] bg-snow-gray">
              <Image
                src={images[currentImageIndex]}
                alt={work.title}
                fill
                className="object-cover"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Title & Category */}
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  work.category === 'study' ? 'bg-mango/20 text-mango' : 'bg-gold/20 text-gold'
                }`}>
                  {work.categoryLabel || work.category}
                </span>
                <h2 className="text-3xl font-bold text-deep-black mb-2">{work.title}</h2>
                {work.titleEn && (
                  <p className="text-medium-gray">{work.titleEn}</p>
                )}
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {photographer && (
                  <div className="flex items-center gap-2 text-soft-black">
                    <Camera className="w-5 h-5 text-gold" />
                    <span>{photographer}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-soft-black">
                  <Tag className="w-5 h-5 text-gold" />
                  <span>{work.categoryLabel || work.category}</span>
                </div>
              </div>

              {/* Description */}
              {description && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">作品描述</h3>
                  <p className="text-medium-gray leading-relaxed">{description}</p>
                </div>
              )}

              {/* Pricing */}
              {pricing && (
                <div className="mb-6 p-4 bg-gold-pale rounded-xl">
                  <h3 className="text-lg font-semibold mb-2 text-gold">服务定价</h3>
                  <p className="text-soft-black">{pricing}</p>
                </div>
              )}

              {/* Thumbnail Navigation */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        index === currentImageIndex ? 'border-gold' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* CTA */}
              <button className="w-full mt-6 py-4 bg-gold text-white rounded-xl font-semibold hover:bg-gold-light transition-colors">
                预约此服务
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
