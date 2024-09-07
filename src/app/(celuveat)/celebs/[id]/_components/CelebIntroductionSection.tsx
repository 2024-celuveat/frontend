'use client';

import { CelebrityDetail } from '@/@types';

import BottomSheet from '@/components/@ui/BottomSheet';
import Link from 'next/link';
import { overlay } from 'overlay-kit';
import { deleteInterestedCelebrity, postInterestedCelebrity } from '@/app/(actions)/celebs/actions';
import { colors } from '@/constants/colors';
import IconHeartFilled from '@/components/@icon/IconHeartFilled';
import IconPlus from '@/components/@icon/IconPlus';
import { formatToTenThousandUnits } from '@/utils/formatToTenThousandUnits';
import useOptimisticLike from '@/hooks/useOptimisticLike';
import Avatar from '@/components/Avatar';

interface CelebIntroductionSectionProps {
  celebrityInfo: CelebrityDetail;
}

const CelebIntroductionSection = ({ celebrityInfo }: CelebIntroductionSectionProps) => {
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike({
    liked: celebrityInfo.interested,
    onClickLike: () => postInterestedCelebrity(celebrityInfo.celebrity.id),
    onClickCancelLike: () => deleteInterestedCelebrity(celebrityInfo.celebrity.id),
  });

  const openBottomSheet = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount}>
          {celebrityInfo?.celebrity.youtubeContentResults.map(({ id, channelUrl, contentsName }, index) => (
            <>
              {index !== 0 && <hr className="h-1 w-full bg-gray-100" />}
              <Link key={id} href={channelUrl} className="flex h-56 w-full items-center justify-center">
                <span className="title-16-sb">채널 {contentsName} 바로가기</span>
              </Link>
            </>
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
      <div className="flex h-72">
        <div className="flex-1">
          <span className="title-22-md">{celebrityInfo?.celebrity.name}</span>
          <div className="mt-6 flex items-center">
            <span className="body-14-rg">구독자</span>
            <span className="ml-2 body-14-md">
              {formatToTenThousandUnits(celebrityInfo?.celebrity.youtubeContentResults[0].subscriberCount)}명
            </span>
            <span className="ml-12 body-14-rg">추천 매장</span>
            <span className="ml-2 body-14-md">
              {celebrityInfo?.celebrity.youtubeContentResults[0].restaurantCount}개
            </span>
          </div>
          <p className="mt-14 pr-16 body-13-rg">{celebrityInfo?.celebrity.introduction}</p>
        </div>
        <Avatar imageUrl={celebrityInfo?.celebrity.profileImageUrl} size={72} alt={celebrityInfo?.celebrity.name} />
      </div>
      <div className="mt-20 flex gap-10">
        {isLiked ? (
          <button
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-main-600 py-12 title-15-md"
            onClick={handleClickCancelLike}
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
