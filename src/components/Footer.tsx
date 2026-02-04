'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SnowchessLogo } from './brand';
import { WeChatIcon } from './icons/WeChatIcon';

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = 'zh' }: FooterProps) {
  const isZh = locale === 'zh';

  const quickLinks = [
    { href: `/${locale}/`, label: isZh ? '首页' : 'Home' },
    { href: `/${locale}/works/`, label: isZh ? '作品集' : 'Portfolio' },
    { href: `/${locale}/team/`, label: isZh ? '团队' : 'Team' },
    { href: `/${locale}/blog/`, label: 'Blog' },
    { href: `/${locale}/schedule/`, label: isZh ? '档期查询' : 'Booking' },
    { href: `/${locale}/ai/`, label: isZh ? 'AI赋能' : 'AI Features' },
  ];

  const services = [
    isZh ? '商业摄影' : 'Commercial',
    isZh ? '婚礼跟拍' : 'Wedding',
    isZh ? '研学摄影' : 'Study Tour',
    isZh ? '旅行跟拍' : 'Travel',
    isZh ? '航拍' : 'Aerial',
  ];

  return (
    <footer className="bg-deep-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SnowchessLogo showText={false} />
              <span className="font-bold text-xl">SnowChess</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {isZh ? '至纯如雪，博弈瞬间' : 'Pure Vision. Strategic Capture.'}
            </p>
            <p className="text-gray-500 text-sm">
              {isZh 
                ? '专业摄影服务，记录每一个珍贵瞬间' 
                : 'Professional photography services, capturing every precious moment'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {isZh ? '快速链接' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {isZh ? '服务项目' : 'Services'}
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {isZh ? '联系我们' : 'Contact'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <WeChatIcon className="w-4 h-4 text-gold" />
                <span>Toby_T_Yuan</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <span>miketboy@qq.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>{isZh ? '成都市金牛区' : 'Chengdu, China'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 {isZh ? '雪弈摄影工作室' : 'SnowChess Photography Studio'}. All rights reserved.
          </p>

          {/* Easter Egg Cats */}
          <div className="flex items-center gap-4" title={isZh ? '彩蛋：雪弈的猫咪们' : 'Easter Egg: SnowChess Cats'}>
            <motion.div 
              className="relative w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <Image
                src="/images/cats/cat-black.png"
                alt="黑猫"
                fill
                className="object-contain pixel-art"
              />
            </motion.div>
            <motion.div 
              className="relative w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <Image
                src="/images/cats/cat-siamese.png"
                alt="暹罗猫"
                fill
                className="object-contain pixel-art"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
