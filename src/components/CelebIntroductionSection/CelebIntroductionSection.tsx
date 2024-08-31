'use client';

import { CelebrityDetail } from '@/@types';

import BottomSheet from '@/components/@ui/BottomSheet';
import Image from 'next/image';
import Link from 'next/link';
import { overlay } from 'overlay-kit';
import { useState } from 'react';
import IconHeart from '../@icon/IconHeartFilled';
import IconPlus from '../@icon/IconPlus';
import { deleteInterestedCelebrity, postInterestedCelebrity } from '@/app/(actions)/celebs/actions';
import { colors } from '@/constants/colors';
import IconHeartFilled from '../@icon/IconHeartFilled';

interface CelebIntroductionSectionProps {
  celebrityInfo: CelebrityDetail;
}

const CelebIntroductionSection = ({ celebrityInfo }: CelebIntroductionSectionProps) => {
  const [isLiked, setIsLiked] = useState(celebrityInfo.interested);

  const handleClickLike = async () => {
    try {
      setIsLiked(true);
      await postInterestedCelebrity(celebrityInfo.celebrity.id);
    } catch (err) {
      setIsLiked(false);
    }
  };

  const handleClickUnlike = async () => {
    try {
      setIsLiked(false);
      await deleteInterestedCelebrity(celebrityInfo.celebrity.id);
    } catch (err) {
      setIsLiked(true);
    }
  };

  const openBottomSheet = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="유튜브 채널 바로가기">
          {celebrityInfo?.celebrity.youtubeContentResults.map(({ id, channelUrl, contentsName }) => (
            <Link
              key={id}
              href={channelUrl}
              className="flex h-56 w-full items-center justify-center gap-8 rounded-[8px] bg-gray-100"
            >
              <span className="body-16-md">{contentsName} 채널 바로가기</span>
            </Link>
          ))}
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
          <span className="title-22-md">{celebrityInfo?.celebrity.name}</span>
          <div className="mt-6 flex items-center">
            <span className="body-14-rg">구독자</span>
            <span className="ml-2 body-14-md">
              {celebrityInfo?.celebrity.youtubeContentResults[0].subscriberCount}명
            </span>
            <span className="ml-12 body-14-rg">추천 매장</span>
            <span className="ml-2 body-14-md">
              {celebrityInfo?.celebrity.youtubeContentResults[0].restaurantCount}개
            </span>
          </div>
          <p className="mt-14 pr-16 body-13-rg">{celebrityInfo?.celebrity.introduction}</p>
        </div>

        {celebrityInfo && (
          <Image
            className="h-72 w-72 rounded-full bg-gray-200"
            src={celebrityInfo?.celebrity.profileImageUrl}
            alt={celebrityInfo?.celebrity.name}
            width={72}
            height={72}
          />
        )}
      </div>
      <div className="mt-20 flex gap-10">
        {isLiked ? (
          <button
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-main-600 py-12 title-15-md"
            onClick={handleClickUnlike}
          >
            <IconHeartFilled width={20} height={20} fill={colors.white.DEFAULT} />
            <span className="text-white">관심</span>
          </button>
        ) : (
          <button
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12"
            onClick={handleClickLike}
          >
            <IconPlus width={20} height={20} fill={colors.main[700]} />
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
