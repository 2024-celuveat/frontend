'use client';

import Image, { StaticImageData } from 'next/image';

import { SocialLoginType } from '@/@types';
import google from '@/assets/icons/social-login/google_symbol.webp';
import kakao from '@/assets/icons/social-login/kakao_symbol.webp';
import naver from '@/assets/icons/social-login/naver_symbol.webp';
import Avatar from '@/components/Avatar';
import { useUserProfileQuery } from '@/hooks/server/members';

const LOGO: Record<SocialLoginType, StaticImageData> = {
  KAKAO: kakao,
  NAVER: naver,
  GOOGLE: google,
};

function Form() {
  const { data: myProfile } = useUserProfileQuery();

  return (
    <>
      <section className="flex justify-center pt-[40px]">
        <Avatar imageUrl={myProfile.profileImageUrl} size={72} alt="프로필 이미지" />
      </section>
      <section className="px-20 pb-8 pt-20">
        <h2 className="h-[33px] text-gray-400 body-14-md">별명</h2>
        <input
          className="flex h-48 w-full items-center gap-10 rounded-[12px] bg-gray-100 pl-14 shadow-sm title-15-md"
          defaultValue={myProfile.nickname}
        />
      </section>
      <section className="px-20 pb-8 pt-20">
        <h2 className="h-[33px] text-gray-400 body-14-md">연동 계정</h2>
        <div className="flex h-48 w-full items-center gap-[10px] rounded-[8px] border border-gray-200 px-12 py-8">
          <Image src={LOGO[myProfile.serverType]} width={24} height={24} alt="카카오 로고" />
          <span className="text-gray-800 title-15-md">{myProfile.email}</span>
        </div>
      </section>
      <section className="absolute bottom-[100px] left-0 w-full px-20">
        <button
          type="button"
          className="mt-20 h-[50px] w-full rounded-[8px] bg-main-600 text-white title-16-sb disabled:bg-gray-200"
        >
          저장하기
        </button>
      </section>
    </>
  );
}

export default Form;
