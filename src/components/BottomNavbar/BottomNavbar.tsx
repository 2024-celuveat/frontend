'use client';

import Link from 'next/link';
import { overlay, OverlayProvider } from 'overlay-kit';
import BottomSheet from '../@ui/BottomSheet';
import Image from 'next/image';
import kakao from '@/assets/icons/kakao.webp';
import naver from '@/assets/icons/naver.webp';
import google from '@/assets/icons/google.webp';

import { usePathname, useRouter } from 'next/navigation';
import { SocialLoginType } from '@/@types/server/login.type';

const style = {
  logo: 'flex h-56 w-full items-center justify-center gap-8 rounded-[8px]',
};

interface BottomNavbarProps {
  isLogin: boolean;
}

const BottomNavbar = ({ isLogin }: BottomNavbarProps) => {
  const pathname = usePathname();
  const firstPath = pathname?.split('/')[1];
  const router = useRouter();

  const handleClickLoginButton = async (socialLoginType: SocialLoginType) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/social-login/url/${socialLoginType}`,
    );
    router.push(await response.text());
  };

  const handleClickLoginIcon = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="로그인">
          <button className={`${style.logo} bg-[#FEE502]`} onClick={() => handleClickLoginButton('KAKAO')}>
            <Image src={kakao} width={24} height={24} alt="카카오 로고" />
            <span className="body-16-md">카카오로 로그인하기</span>
          </button>
          <button className={`${style.logo} mt-16 bg-[#03C75A]`} onClick={() => handleClickLoginButton('NAVER')}>
            <Image src={naver} width={24} height={24} alt="네이버 로고" />
            <span className="text-white body-16-md">네이버로 로그인하기</span>
          </button>
          <button className={`${style.logo} mt-16 bg-gray-100`} onClick={() => handleClickLoginButton('GOOGLE')}>
            <Image src={google} width={24} height={24} alt="구글 로고" />
            <span className="body-16-md">구글로 로그인하기</span>
          </button>
        </BottomSheet>
      );
    });
  };

  const handleClickMyIcon = () => {
    router.push('/my');
  };

  return (
    <OverlayProvider>
      <div className="h-80" />
      <nav className="fixed bottom-0 right-1/2 flex h-72 w-full max-w-[495px] translate-x-1/2 items-start justify-around border-t bg-white px-24 py-8">
        <Link href="/" className="flex flex-col items-center gap-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.0946 11.0258C24.352 11.2474 24.5 11.5702 24.5 11.9099V23.3332C24.5 23.9776 23.9777 24.4999 23.3333 24.4999H18.6667C18.0223 24.4999 17.5 23.9776 17.5 23.3332V17.5C17.5 16.8557 16.9777 16.3333 16.3333 16.3333H11.6667C11.0223 16.3333 10.5 16.8557 10.5 17.5V23.3332C10.5 23.9776 9.97766 24.4999 9.33333 24.4999H4.66667C4.02234 24.4999 3.5 23.9776 3.5 23.3332V11.9099C3.5 11.5702 3.64801 11.2474 3.90539 11.0258L13.2387 2.98878C13.6763 2.61198 14.3237 2.61198 14.7613 2.98878L24.0946 11.0258Z"
              className={firstPath === '' ? 'fill-gray-800' : 'fill-gray-200'}
            />
          </svg>
          <span className="text-gray-400 caption-12-rg">홈</span>
        </Link>
        <Link href="/map" className="flex flex-col items-center gap-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" fill="white" />
            <path
              d="M25.6663 5.23631C25.6663 4.50045 24.9433 3.98085 24.2431 4.21355L17.964 6.30036L10.327 4.12485C10.0915 4.05777 9.84017 4.07238 9.61409 4.1663L2.99842 6.91464C2.59548 7.08203 2.33301 7.47457 2.33301 7.9098V22.7638C2.33301 23.4996 3.05607 24.0192 3.75625 23.7865L10.0353 21.6997L17.6723 23.8752C17.9078 23.9423 18.1592 23.9277 18.3853 23.8338L25.0009 21.0854C25.4039 20.9181 25.6663 20.5255 25.6663 20.0903V5.23631Z"
              className={firstPath === 'map' ? 'fill-gray-800' : 'fill-gray-200'}
            />
          </svg>
          <span className="text-gray-400 caption-12-rg">지도</span>
        </Link>
        <Link href="/interested" className="flex flex-col items-center gap-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.25 10.8646C26.25 18.5209 14.898 24.7181 14.4145 24.974C14.2871 25.0425 14.1447 25.0784 14 25.0784C13.8553 25.0784 13.7129 25.0425 13.5855 24.974C13.102 24.7181 1.75 18.5209 1.75 10.8646C1.75203 9.06675 2.46713 7.34309 3.73842 6.07179C5.00971 4.8005 6.73337 4.0854 8.53125 4.08337C11.0833 4.0805 12.7673 5.05462 14 6.69634C15.2327 5.05462 16.9167 4.08337 19.4688 4.08337C21.2666 4.0854 22.9903 4.8005 24.2616 6.07179C25.5329 7.34309 26.248 9.06675 26.25 10.8646Z"
              className={firstPath === 'interested' ? 'fill-gray-800' : 'fill-gray-200'}
            />
          </svg>
          <span className="text-gray-400 caption-12-rg">관심</span>
        </Link>
        <div
          onClick={isLogin ? handleClickMyIcon : handleClickLoginIcon}
          className="flex cursor-pointer flex-col items-center gap-6"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.9998 15.1666C5.74777 15.1666 2.69966 19.3224 2.36472 24.6392C2.32903 25.2057 2.79325 25.6666 3.36088 25.6666H24.6387C25.2063 25.6666 25.6705 25.2057 25.6348 24.6392C25.2999 19.3224 22.2518 15.1666 13.9998 15.1666Z"
              className={firstPath === 'my' ? 'fill-gray-800' : 'fill-gray-200'}
            />
            <path
              d="M13.9998 2.91663C11.1003 2.91663 8.74977 5.26713 8.74977 8.16663C8.74977 11.0661 11.1003 13.4166 13.9998 13.4166C16.8993 13.4166 19.2498 11.0661 19.2498 8.16663C19.2498 5.26713 16.8993 2.91663 13.9998 2.91663Z"
              className={firstPath === 'my' ? 'fill-gray-800' : 'fill-gray-200'}
            />
          </svg>
          <span className="text-gray-400 caption-12-rg">{isLogin ? '마이' : '로그인'}</span>
        </div>
      </nav>
    </OverlayProvider>
  );
};

export default BottomNavbar;
