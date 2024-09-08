'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { overlay } from 'overlay-kit';

import { SocialLoginType } from '@/@types/server/login.type';
import google from '@/assets/icons/google.webp';
import kakao from '@/assets/icons/kakao.webp';
import naver from '@/assets/icons/naver.webp';
import { colors } from '@/constants/colors';

import IconHeartFilled from '../@icon/IconHeartFilled';
import IconHomeFilled from '../@icon/IconHomeFilled';
import IconMapFilled from '../@icon/IconMapFilled';
import IconPersonFilled from '../@icon/IconPersonFilled';
import BottomSheet from '../@ui/BottomSheet';

const style = {
  logo: 'flex h-56 w-full items-center justify-center gap-8 rounded-[8px]',
};

interface BottomNavbarProps {
  isLogin: boolean;
}

function BottomNavbar({ isLogin }: BottomNavbarProps) {
  const pathname = usePathname();
  const firstPath = pathname?.split('/')[1];
  const router = useRouter();

  const handleClickLoginButton = async (socialLoginType: SocialLoginType) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/social-login/url/${socialLoginType}`,
    );
    router.push(await response.text());
  };

  const openLoginBottomSheet = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="로그인">
          <button
            type="button"
            className={`${style.logo} bg-[#FEE502]`}
            onClick={() => handleClickLoginButton('KAKAO')}
          >
            <Image src={kakao} width={24} height={24} alt="카카오 로고" />
            <span className="body-16-md">카카오로 로그인하기</span>
          </button>
          <button
            type="button"
            className={`${style.logo} mt-16 bg-[#03C75A]`}
            onClick={() => handleClickLoginButton('NAVER')}
          >
            <Image src={naver} width={24} height={24} alt="네이버 로고" />
            <span className="text-white body-16-md">네이버로 로그인하기</span>
          </button>
          <button
            type="button"
            className={`${style.logo} mt-16 bg-gray-100`}
            onClick={() => handleClickLoginButton('GOOGLE')}
          >
            <Image src={google} width={24} height={24} alt="구글 로고" />
            <span className="body-16-md">구글로 로그인하기</span>
          </button>
        </BottomSheet>
      );
    });
  };

  const handleClickInterestedIcon = () => {
    if (!isLogin) {
      openLoginBottomSheet();
      return;
    }

    router.push('/interested');
  };

  const handleClickLoginIcon = () => {
    openLoginBottomSheet();
  };

  const handleClickMyIcon = () => {
    router.push('/my');
  };

  return (
    <>
      <div className="h-[88px]" />
      <div className="fixed bottom-0 right-1/2 flex h-[88px] w-full max-w-[495px] translate-x-1/2 flex-col">
        <nav className="flex h-72 w-full items-start justify-around border-t bg-white px-24 py-8">
          <Link href="/" className="flex flex-col items-center gap-6">
            {firstPath === '' ? (
              <IconHomeFilled width={28} height={28} fill={colors.gray[800]} />
            ) : (
              <IconHomeFilled width={28} height={28} fill={colors.gray[200]} />
            )}
            <span className="text-gray-400 caption-12-rg">홈</span>
          </Link>

          <Link href="/map" className="flex flex-col items-center gap-6">
            {firstPath === 'map' ? (
              <IconMapFilled width={28} height={28} fill={colors.gray[800]} />
            ) : (
              <IconMapFilled width={28} height={28} fill={colors.gray[200]} />
            )}
            <span className="text-gray-400 caption-12-rg">지도</span>
          </Link>

          <button type="button" onClick={handleClickInterestedIcon} className="flex flex-col items-center gap-6">
            {firstPath === 'interested' ? (
              <IconHeartFilled width={28} height={28} fill={colors.gray[800]} />
            ) : (
              <IconHeartFilled width={28} height={28} fill={colors.gray[200]} />
            )}
            <span className="text-gray-400 caption-12-rg">관심</span>
          </button>

          <div
            onClick={isLogin ? handleClickMyIcon : handleClickLoginIcon}
            className="flex cursor-pointer flex-col items-center gap-6"
          >
            {firstPath === 'my' ? (
              <IconPersonFilled width={28} height={28} fill={colors.gray[800]} />
            ) : (
              <IconPersonFilled width={28} height={28} fill={colors.gray[200]} />
            )}
            <span className="text-gray-400 caption-12-rg">{isLogin ? '마이' : '로그인'}</span>
          </div>
        </nav>
        <div className="h-[16px] bg-white" />
      </div>
    </>
  );
}

export default BottomNavbar;
