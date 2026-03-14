import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getMetadataBase } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

