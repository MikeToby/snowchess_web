'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface SnowchessLogoProps {
  className?: string;
  showText?: boolean;
}

// Business Logo (Golden SnowChess text)
export function BusinessLogo({ className = '', showText = true }: SnowchessLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-14 h-14">
        <Image
          src="/images/logo/snowchees.png"
          alt="SnowChess Logo"
          fill
          className="object-contain"
        />
      </div>
      {showText && (
        <span className="text-2xl font-bold text-gold tracking-tight">
          SnowChess
        </span>
      )}
    </div>
  );
}

// Study Tour Logo (Snow Owl with Mango color)
export function OwlLogo({ className = '', showText = true }: SnowchessLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-mango"
      >
        {/* Snow Owl icon */}
        <ellipse cx="20" cy="22" rx="14" ry="12" fill="currentColor" opacity="0.2" />
        <ellipse cx="20" cy="22" rx="12" ry="10" fill="currentColor" />
        {/* Eyes */}
        <circle cx="15" cy="18" r="4" fill="white" />
        <circle cx="25" cy="18" r="4" fill="white" />
        <circle cx="15" cy="18" r="2" fill="#1A1A1A" />
        <circle cx="25" cy="18" r="2" fill="#1A1A1A" />
        {/* Beak */}
        <path d="M20 22l-2 3h4l-2-3z" fill="#FFD54F" />
        {/* Ears */}
        <path d="M10 12l4 6-4-2V12zM30 12l-4 6 4-2V12z" fill="currentColor" />
      </svg>
      {showText && (
        <span className="text-xl font-bold text-mango tracking-tight">
          雪鸮研学
        </span>
      )}
    </div>
  );
}

// Smart Logo that switches based on route
export default function SnowchessLogo({ className = '', showText = true }: SnowchessLogoProps) {
  const pathname = usePathname();
  
  // Check if current page is study-related
  const isStudyPage = pathname?.includes('study') || 
                      pathname?.includes('xueyan') || 
                      pathname?.includes('研学');
  
  if (isStudyPage) {
    return <OwlLogo className={className} showText={showText} />;
  }
  
  return <BusinessLogo className={className} showText={showText} />;
}

// Hook to get current logo type
export function useLogoType(): 'business' | 'study' {
  const pathname = usePathname();
  const isStudyPage = pathname?.includes('study') || 
                      pathname?.includes('xueyan') || 
                      pathname?.includes('研学');
  return isStudyPage ? 'study' : 'business';
}
