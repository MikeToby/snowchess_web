import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '雪弈摄影工作室 | SnowChess Photography Studio',
  description: '至纯如雪，博弈瞬间。专业商业摄影、研学摄影、婚礼跟拍、旅行摄影服务。',
};

export async function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
