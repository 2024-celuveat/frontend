import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Celuveat',
  description: '셀럽 추천 맛집 소개 서비스, 셀럽잇',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='relative max-w-[495px] min-h-svh my-0 mx-auto shadow-lg'>
        {children}
      </body>
    </html>
  );
}
