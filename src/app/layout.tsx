import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Celuveat',
  description: '셀럽 추천 맛집 소개 서비스, 셀럽잇',
};

const myFont = localFont({
  src: './PretendardVariable.woff2',
  display: 'block',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={myFont.className}>
      <body className='relative max-w-[495px] min-h-svh my-0 mx-auto shadow-lg'>
        {children}
      </body>
    </html>
  );
}
