'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import SnowchessLogo from '../brand/SnowchessLogo';

interface NavItem {
  path: string;
  label: string;
  labelEn: string;
}

const navItems: NavItem[] = [
  { path: '/', label: '首页', labelEn: 'Home' },
  { path: '/works/', label: '作品集', labelEn: 'Works' },
  { path: '/team/', label: '团队', labelEn: 'Team' },
  { path: '/blog/', label: 'Blog', labelEn: 'Blog' },
  { path: '/schedule/', label: '档期', labelEn: 'Booking' },
  { path: '/ai/', label: 'AI赋能', labelEn: 'AI' },
];

interface FloatingCapsuleNavProps {
  locale?: string;
  onLocaleChange?: (locale: string) => void;
}

export default function FloatingCapsuleNav({ 
  locale = 'zh',
  onLocaleChange 
}: FloatingCapsuleNavProps) {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const getLocalePath = (path: string) => {
    if (path === '/') {
      return `/${locale}/`;
    }
    const normalized = path.startsWith('/') ? path.slice(1) : path;
    return `/${locale}/${normalized}`;
  };

  const toggleLocale = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    onLocaleChange?.(newLocale);
    const nextPath = pathname?.replace(/^\/(zh|en)(?=\/|$)/, `/${newLocale}`) || `/${newLocale}/`;
    setIsMobileMenuOpen(false);
    router.push(nextPath);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    const target = getLocalePath(path);
    return pathname?.startsWith(target);
  };

  return (
    <>
      {/* Floating Capsule Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-lg backdrop-blur-md'
            : 'bg-white/80 backdrop-blur-sm'
        } rounded-full px-4 md:px-6 py-3`}
      >
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <Link href={getLocalePath('/')} className="flex-shrink-0">
            <SnowchessLogo showText={false} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={getLocalePath(item.path)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-gold bg-gold/10'
                    : 'text-soft-black hover:text-gold hover:bg-snow-gray'
                }`}
              >
                {locale === 'zh' ? item.label : item.labelEn}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2 py-1.5 text-sm text-soft-black hover:text-gold transition-colors rounded-full hover:bg-snow-gray"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{locale === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-soft-black hover:text-gold transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-snow-gray rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={getLocalePath(item.path)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-gold bg-gold/10'
                          : 'text-deep-black hover:bg-snow-gray'
                      }`}
                    >
                      {locale === 'zh' ? item.label : item.labelEn}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Language Switcher */}
              <div className="absolute bottom-8 left-6 right-6">
                <button
                  onClick={toggleLocale}
                  className="w-full py-3 px-4 bg-snow-gray hover:bg-gold/10 rounded-xl text-soft-black font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Globe className="w-5 h-5" />
                  {locale === 'zh' ? 'Switch to English' : '切换到中文'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
