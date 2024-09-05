import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import BottomNavbar from '@/components/BottomNavbar';
import { getIsLogin } from './(actions)/social-login/actions';
import Script from 'next/script';
import Provider from './provider';

export const metadata: Metadata = {
  title: 'Celuveat',
  description: '셀럽 추천 맛집 소개 서비스, 셀럽잇',
};

const myFont = localFont({
  src: './pretendard-variable.woff2',
  display: 'block',
});

export const viewport: Viewport = {
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogin = await getIsLogin();
  return (
    <html lang="ko" className={myFont.className}>
      <body className="relative mx-auto my-0 min-h-svh max-w-[495px] shadow-lg font-synthesis-none">
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY_ID}`}
        ></Script>
        <Provider>
          <Header />
          {children}
          <BottomNavbar isLogin={isLogin} />
        </Provider>
      </body>
    </html>
  );
}
