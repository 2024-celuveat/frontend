'use client';

import Link from 'next/link';
import { overlay, OverlayProvider } from 'overlay-kit';
import BottomSheet from '../@ui/BottomSheet';
import Image from 'next/image';

import kakao from '@/assets/icons/kakao.webp';
import naver from '@/assets/icons/naver.webp';
import google from '@/assets/icons/google.webp';

const style = {
  logo: 'flex h-56 w-full items-center justify-center gap-8 rounded-[8px]',
};

const BottomNavbar = () => {
  const openBottomSheet = () => {
    overlay.open(({ isOpen, close, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="로그인">
          <button className={`${style.logo} bg-[#FEE502]`}>
            <Image src={kakao} width={24} height={24} alt="카카오 로고" />
            <span className="body-16-md">카카오로 로그인하기</span>
          </button>
          <button className={`${style.logo} mt-16 bg-[#03C75A]`}>
            <Image src={naver} width={24} height={24} alt="네이버 로고" />
            <span className="text-white body-16-md">네이버로 로그인하기</span>
          </button>
          <button className={`${style.logo} mt-16 bg-gray-100`}>
            <Image src={google} width={24} height={24} alt="구글 로고" />
            <span className="body-16-md">구글로 로그인하기</span>
          </button>
        </BottomSheet>
      );
    });
  };

  return (
    <OverlayProvider>
      <div className="h-80" />
      <nav className="fixed bottom-0 right-1/2 flex h-72 w-full max-w-[495px] translate-x-1/2 items-start justify-around border-t bg-white px-24 py-8">
        <Link href="/" className="flex flex-col items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-100"></div>
          <span className="caption-12-rg">홈</span>
        </Link>
        <Link href="" className="flex flex-col items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-100"></div>
          <span className="caption-12-rg">지도</span>
        </Link>
        <Link href="" className="flex flex-col items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-100"></div>
          <span className="caption-12-rg">관심</span>
        </Link>
        <div onClick={openBottomSheet} className="flex cursor-pointer flex-col items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-100"></div>
          <span className="caption-12-rg">로그인</span>
        </div>
      </nav>
    </OverlayProvider>
  );
};

export default BottomNavbar;
