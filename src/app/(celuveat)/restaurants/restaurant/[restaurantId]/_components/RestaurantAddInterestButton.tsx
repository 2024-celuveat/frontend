'use client';

import { deleteInterestedRestaurant, postInterestedRestaurant } from '@/app/(actions)/restaurants/actions';
import IconHeartFilled from '@/components/@icon/IconHeartFilled';
import IconPlus from '@/components/@icon/IconPlus';
import { colors } from '@/constants/colors';
import useOptimisticLike from '@/hooks/useOptimisticLike';

interface RestaurantAddInterestButtonProps {
  liked: boolean;
  restaurantId: number;
}

function RestaurantAddInterestButton({ liked, restaurantId }: RestaurantAddInterestButtonProps) {
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike({
    liked,
    onClickLike: () => postInterestedRestaurant(restaurantId),
    onClickCancelLike: () => deleteInterestedRestaurant(restaurantId),
  });

  return isLiked ? (
    <button type="button" className="flex h-full flex-1 justify-center gap-4 rounded-[8px] bg-main-600 py-12">
      <IconHeartFilled width={20} height={20} fill={colors.white.DEFAULT} />
      <span className="text-white title-15-md" onClick={handleClickCancelLike}>
        관심
      </span>
    </button>
  ) : (
    <button
      type="button"
      className="flex h-full flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12"
    >
      <IconPlus width={20} height={20} fill={colors.main[700]} />
      <span className="text-main-700 title-15-md" onClick={handleClickLike}>
        관심 추가
      </span>
    </button>
  );
}

export default RestaurantAddInterestButton;
