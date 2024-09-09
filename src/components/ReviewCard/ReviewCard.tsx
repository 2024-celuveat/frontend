'use client';

import { overlay } from 'overlay-kit';

import { Review } from '@/app/(actions)/reviews/actions';
import IconMore from '@/components/@icon/IconMore';
import BottomSheet from '@/components/@ui/BottomSheet';
import Avatar from '@/components/Avatar';
import RestaurantReviewLikeButton from '@/components/RestaurantReviewLikeButton';
import { colors } from '@/constants/colors';
import { formatDate } from '@/utils/formatDate';

import IconStarFilled from '../@icon/IconStarFilled';

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  const openBottomSheet = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount}>
          <button type="button" className="flex h-56 w-full items-center justify-center">
            <span className="title-16-sb">수정하기</span>
          </button>
          <button type="button" className="flex h-56 w-full items-center justify-center">
            <span className="title-16-sb">삭제하기</span>
          </button>
          <button
            type="button"
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
    <li>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Avatar imageUrl={review.writer.profileImageUrl} size={25} alt={review.writer.nickname} />
          <span className="text-gray-900 title-16-sb">{review.writer.nickname}</span>
          <span className="text-gray-400 caption-12-rg">{formatDate(review.updatedAt)}</span>
        </div>
        <button type="button" onClick={openBottomSheet}>
          <IconMore />
        </button>
      </div>

      <div className="mt-10 flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <IconStarFilled key={index} fill={index < 5 - review.star ? colors.sub.orange : colors.gray[200]} />
        ))}
      </div>

      <p className="mt-12 text-gray-900 body-13-rg">{review.content}</p>

      <RestaurantReviewLikeButton reviewId={review.id} helps={review.helps} clickedHelpful={review.clickedHelpful} />
    </li>
  );
}

export default ReviewCard;