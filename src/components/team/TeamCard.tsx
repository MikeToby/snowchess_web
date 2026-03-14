'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

export interface TeamMember {
  id: string;
  slug?: string;
  name: string;
  nameEn?: string;
  title: string;
  titleEn?: string;
  bio: string;
  bioEn?: string;
  image: string;
  skills: string[];
  xiaohongshuQR?: string;
  xiaohongshuName?: string;
}

interface TeamCardProps {
  member: TeamMember;
  index?: number;
  locale?: string;
}

export default function TeamCard({ member, index = 0, locale = 'zh' }: TeamCardProps) {
  const [showQR, setShowQR] = useState(false);
  const detailHref = member.slug ? `/${locale}/team/${member.slug}/` : `/${locale}/team/`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay with skills */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-deep-black mb-1">{member.name}</h3>
          <p className="text-gold text-sm font-medium mb-3">{member.title}</p>
          <p className="text-medium-gray text-sm line-clamp-2 mb-4">{member.bio}</p>

          <Link
            href={detailHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-deep-black hover:text-gold transition-colors mb-4"
          >
            <span>{locale === 'zh' ? '查看摄影师详情' : 'View profile'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Xiaohongshu QR Button */}
          {member.xiaohongshuQR && (
            <button
              onClick={() => setShowQR(true)}
              className="w-full py-2 px-4 bg-snow-cream hover:bg-gold/10 rounded-lg transition-colors flex items-center justify-center gap-2 group/btn"
            >
              <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span className="text-sm text-soft-black group-hover/btn:text-gold transition-colors">
                关注小红书
              </span>
            </button>
          )}
        </div>
      </motion.div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-4 p-1 hover:bg-snow-gray rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-medium-gray" />
              </button>

              <h3 className="text-lg font-bold text-deep-black mb-2">
                关注 {member.name} 的小红书
              </h3>
              <p className="text-medium-gray text-sm mb-4">
                扫码关注，查看更多作品
              </p>

              <div className="relative w-48 h-48 mx-auto rounded-xl overflow-hidden border-2 border-snow-gray">
                <Image
                  src={member.xiaohongshuQR!}
                  alt={`${member.name}的小红书二维码`}
                  fill
                  className="object-cover"
                />
              </div>

              {member.xiaohongshuName && (
                <p className="mt-4 text-sm text-medium-gray">
                  小红书号: <span className="text-gold font-medium">{member.xiaohongshuName}</span>
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
