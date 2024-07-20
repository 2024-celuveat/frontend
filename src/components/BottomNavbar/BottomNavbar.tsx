'use client';

import Link from 'next/link';
import { overlay, OverlayProvider } from 'overlay-kit';
import BottomSheet from '../@ui/BottomSheet';

const BottomNavbar = () => {
  const clickHandler = () => {
    overlay.open(({ isOpen, close, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="로그인">
          <button className="flex h-56 w-full items-center justify-center bg-gray-100">
            <span className="body-16-md">카카오로 로그인하기</span>
          </button>
          <button className="mt-16 flex h-56 w-full items-center justify-center bg-gray-100">
            <span className="body-16-md">네이버로 로그인하기</span>
          </button>
          <button className="mt-16 flex h-56 w-full items-center justify-center bg-gray-100">
            <span className="body-16-md">구글로 로그인하기</span>
          </button>
        </BottomSheet>
      );
    });
  };
  return (
    <OverlayProvider>
      <div className="h-72" />
      <nav className="fixed bottom-0 right-1/2 flex h-60 w-full max-w-[495px] translate-x-1/2 justify-around border-t bg-white px-24 py-8">
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
        <div onClick={clickHandler} className="flex cursor-pointer flex-col items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-100"></div>
          <span className="caption-12-rg">로그인</span>
        </div>
      </nav>
    </OverlayProvider>
  );
};

export default BottomNavbar;
