'use client';

import { IconHeartFilled20, IconPlus20 } from '@/assets/icons';
import BottomSheet from '@/components/@ui/BottomSheet';
import { useCelebProfiles } from '@/hooks/server';
import Image from 'next/image';
import Link from 'next/link';
import { overlay } from 'overlay-kit';
import { useState } from 'react';

interface CelebIntroductionSectionProps {
  celebId: number;
}

const CelebIntroductionSection = ({ celebId }: CelebIntroductionSectionProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const { data } = useCelebProfiles(celebId);

  const openBottomSheet = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="유튜브 채널 바로가기">
          <Link
            href={`https://www.youtube.com/${data?.youtubeChannelName}`}
            className="rounded-[8px]] flex h-56 w-full items-center justify-center gap-8 bg-gray-100"
          >
            <span className="body-16-md">{data?.name} 채널 바로가기</span>
          </Link>
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
          <span className="title-22-md">{data?.name}</span>
          <div className="mt-6 flex items-center">
            <span className="body-14-rg">구독자</span>
            <span className="ml-2 body-14-md">10만명</span>
            <span className="ml-12 body-14-rg">추천 매장</span>
            <span className="ml-2 body-14-md">50개</span>
          </div>
          <p className="mt-14 pr-16 body-13-rg">{data?.youtubeChannelName}</p>
        </div>
        {data && (
          <Image
            className="h-72 w-72 rounded-full bg-gray-200"
            src={data.profileImageUrl}
            alt={data?.name}
            width={72}
            height={72}
          />
        )}
      </div>
      <div className="mt-20 flex gap-10">
        {isLiked ? (
          <button
            className="bg-main-600 flex flex-1 justify-center gap-4 rounded-[8px] py-12 title-15-md"
            onClick={() => {
              setIsLiked(false);
            }}
          >
            <IconHeartFilled20 /> <span className="text-white">관심</span>
          </button>
        ) : (
          <button
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12"
            onClick={() => {
              setIsLiked(true);
            }}
          >
            <IconPlus20 />
            <span className="text-main-700 title-15-md">관심 추가</span>
          </button>
        )}
        <button className="flex-1 rounded-[8px] bg-gray-100 py-12 text-gray-700 title-15-md" onClick={openBottomSheet}>
          유튜브 바로가기
        </button>
      </div>
    </>
  );
};

export default CelebIntroductionSection;
