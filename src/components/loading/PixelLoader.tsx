'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PixelLoaderProps {
  text?: string;
  subtext?: string;
  fullScreen?: boolean;
}

// Pixel art photographer character using SVG
export function PixelPhotographer() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 16 16"
      className="pixel-art"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Head */}
      <rect x="6" y="2" width="4" height="4" fill="#FDBA74" />
      {/* Body */}
      <rect x="5" y="6" width="6" height="6" fill="#3B82F6" />
      {/* Arms */}
      <rect x="3" y="7" width="2" height="4" fill="#FDBA74" />
      <rect x="11" y="7" width="2" height="4" fill="#FDBA74" />
      {/* Camera */}
      <rect x="7" y="8" width="4" height="3" fill="#1F2937" />
      <rect x="8" y="7" width="2" height="1" fill="#1F2937" />
      {/* Flash effect */}
      <motion.rect
        x="12"
        y="6"
        width="2"
        height="2"
        fill="#FCD34D"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      {/* Legs */}
      <rect x="5" y="12" width="2" height="4" fill="#1F2937" />
      <rect x="9" y="12" width="2" height="4" fill="#1F2937" />
    </svg>
  );
}

// Animated pixel photographer with bounce
export function AnimatedPixelPhotographer() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <PixelPhotographer />
      
      {/* Camera flash effect */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0.5, 1.2, 0.5]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
}

// Full pixel loader component
export default function PixelLoader({ 
  text = "正在拍摄中...",
  subtext = "请稍等，精彩即将呈现",
  fullScreen = true 
}: PixelLoaderProps) {
  const containerClasses = fullScreen 
    ? "fixed inset-0 z-50 flex items-center justify-center bg-snow-white"
    : "flex items-center justify-center py-12";

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {/* Animated Pixel Photographer */}
        <div className="flex justify-center mb-6">
          <AnimatedPixelPhotographer />
        </div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-deep-black mb-2"
        >
          {text}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-medium-gray"
        >
          {subtext}
        </motion.p>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gold rounded-full"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 0.6, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
          ))}
        </div>

        {/* Pixel art border decoration */}
        <div className="flex justify-center mt-8 gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-deep-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.1 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Page transition loader
export function PageTransitionLoader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-snow-white"
    >
      <PixelLoader fullScreen={false} />
    </motion.div>
  );
}

// Inline loader for buttons/forms
export function InlinePixelLoader({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`${sizeClasses[size]} animate-pulse`}>
      <svg
        viewBox="0 0 16 16"
        className="w-full h-full pixel-art"
        style={{ imageRendering: 'pixelated' }}
      >
        <rect x="6" y="2" width="4" height="4" fill="#FDBA74" />
        <rect x="5" y="6" width="6" height="6" fill="#3B82F6" />
        <rect x="7" y="8" width="4" height="3" fill="#1F2937" />
        <rect x="5" y="12" width="2" height="2" fill="#1F2937" />
        <rect x="9" y="12" width="2" height="2" fill="#1F2937" />
      </svg>
    </div>
  );
}
