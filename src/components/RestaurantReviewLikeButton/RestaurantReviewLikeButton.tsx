'use client';

import { colors } from '@/constants/colors';
import IconThumbsUpOutlined from '../@icon/IconThumbsUpOutlined';
import useOptimisticLike from '@/hooks/useOptimisticLike';
import { deleteReviewHelpful, postReviewHelpful } from '@/app/(actions)/reviews/actions';
import IconThumbsUpFilled from '../@icon/IconThumbsUpFilled';

interface RestaurantReviewLikeButtonProps {
  reviewId: number;
  helps: number;
  clickedHelpful: boolean;
}

const RestaurantReviewLikeButton = ({ reviewId, helps, clickedHelpful }: RestaurantReviewLikeButtonProps) => {
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike({
    liked: clickedHelpful,
    onClickLike: () => postReviewHelpful(reviewId),
    onClickCancelLike: () => deleteReviewHelpful(reviewId),
  });

  return isLiked ? (
    <button onClick={handleClickCancelLike} className="mt-14 flex items-center gap-4 rounded-[6px] bg-main-600 p-8">
      <IconThumbsUpFilled width={16} height={16} fill={colors.white.DEFAULT} />
      <span className="text-white caption-12-rg">{clickedHelpful ? helps : helps + 1}</span>
    </button>
  ) : (
    <button
      onClick={handleClickLike}
      className="mt-14 flex items-center gap-4 rounded-[6px] border border-gray-200 p-8"
    >
      <IconThumbsUpOutlined width={16} height={16} fill={colors.gray[300]} />
      <span className="text-gray-600 caption-12-rg">{clickedHelpful ? helps - 1 : helps}</span>
    </button>
  );
};

export default RestaurantReviewLikeButton;
