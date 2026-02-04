'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Camera } from 'lucide-react';

export default function Pixel404() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-snow-cream to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Animated Pixel Camera */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          {/* Pixel Camera SVG */}
          <svg
            viewBox="0 0 16 16"
            className="w-full h-full pixel-art"
            style={{ imageRendering: 'pixelated' }}
          >
            {/* Camera body */}
            <rect x="2" y="4" width="12" height="10" fill="#374151" />
            {/* Lens */}
            <rect x="6" y="6" width="4" height="4" fill="#111827" />
            <rect x="7" y="7" width="2" height="2" fill="#4B5563" />
            {/* Flash */}
            <rect x="10" y="5" width="2" height="1" fill="#FCD34D" />
            {/* Viewfinder */}
            <rect x="4" y="5" width="2" height="1" fill="#6B7280" />
            {/* Strap */}
            <rect x="0" y="7" width="2" height="1" fill="#6B7280" />
            <rect x="14" y="7" width="2" height="1" fill="#6B7280" />
          </svg>

          {/* Flash animation */}
          <motion.div
            className="absolute top-2 right-2 w-8 h-8 bg-yellow-400 rounded-full blur-md"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-deep-black mb-4 font-mono"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold text-soft-black mb-2"
        >
          正在拍摄中...
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-medium-gray mb-8"
        >
          您访问的页面正在后期处理中，请稍后再来查看
        </motion.p>

        {/* Back Home Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-full font-medium hover:bg-gold-light transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            返回首页
          </Link>
        </motion.div>

        {/* Easter Egg Cats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center gap-8 opacity-80"
        >
          <div className="relative w-12 h-12 hover:scale-110 transition-transform cursor-pointer" title="黑猫警长">
            <Image
              src="/images/cats/cat-black.png"
              alt="黑猫警长"
              fill
              className="object-contain pixel-art"
            />
          </div>
          <div className="relative w-12 h-12 hover:scale-110 transition-transform cursor-pointer" title="暹罗猫">
            <Image
              src="/images/cats/cat-siamese.png"
              alt="暹罗猫"
              fill
              className="object-contain pixel-art"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
