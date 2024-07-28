'use client';

import { IconHeartFilled20, IconPlus20 } from '@/assets/icons';
import BottomSheet from '@/components/@ui/BottomSheet';
import Image from 'next/image';
import { overlay } from 'overlay-kit';
import { useState } from 'react';

const PROFILE_IMAGE_URL =
  'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj';

const CelebIntroductionSection = () => {
  const [isLiked, setIsLiked] = useState(false);

  const openBottomSheet = () => {
    overlay.open(({ isOpen, close, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="유튜브 채널 바로가기">
          <button className="rounded-[8px]] flex h-56 w-full items-center justify-center gap-8 bg-gray-100">
            <span className="body-16-md">성시경 채널 바로가기</span>
          </button>
          <button
            className="mt-16 flex h-56 w-full items-center justify-center gap-8 rounded-[8px] bg-gray-100"
            onClick={unmount}
          >
            <span className="body-16-md">닫기</span>
          </button>
        </BottomSheet>
      );
    });
  };

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <span className="title-22-md">셀럽 이름</span>
          <div className="mt-6 flex items-center">
            <span className="body-14-rg">구독자</span>
            <span className="ml-2 body-14-md">10만명</span>
            <span className="ml-12 body-14-rg">추천 매장</span>
            <span className="ml-2 body-14-md">50개</span>
          </div>
          <p className="mt-14 pr-16 body-13-rg">
            셀럽 소개글 가나다라마바사아자차카타파하 가나다라마바 최대 2줄 노출 후 말줄임 처리하기...셀럽 소개글
            가나다라마바사아자차카타파하 가나다라마바 최대 2줄 노출 후 말줄임 처리하기...
          </p>
        </div>
        <Image className="h-72 w-72 rounded-full" src={PROFILE_IMAGE_URL} alt="성시경" width={72} height={72} />
      </div>
      <div className="mt-20 flex gap-10">
        {isLiked ? (
          <button
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-[#FF673A] py-12 title-15-md"
            onClick={() => {
              setIsLiked(false);
            }}
          >
            <IconHeartFilled20 /> <span className="text-white">관심</span>
          </button>
        ) : (
          <button
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12 title-15-md"
            onClick={() => {
              setIsLiked(true);
            }}
          >
            <IconPlus20 /> <span className="text-[#FC5524]">관심 추가</span>
          </button>
        )}
        <button className="flex-1 rounded-[8px] bg-gray-100 py-12 title-15-md" onClick={openBottomSheet}>
          유튜브 바로가기
        </button>
      </div>
    </>
  );
};

export default CelebIntroductionSection;
