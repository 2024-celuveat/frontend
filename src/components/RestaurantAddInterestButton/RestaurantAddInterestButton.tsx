'use client';

import { deleteInterestedRestaurant, postInterestedRestaurant } from '@/app/(actions)/restaurants/actions';
import { IconHeartFilled20, IconPlus20 } from '@/assets/icons';
import { useState } from 'react';

interface RestaurantAddInterestButtonProps {
  liked: boolean;
  restaurantId: number;
}

const RestaurantAddInterestButton = ({ liked, restaurantId }: RestaurantAddInterestButtonProps) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleClickLike = async () => {
    try {
      setIsLiked(true);
      await postInterestedRestaurant(restaurantId);
    } catch (err) {
      setIsLiked(false);
    }
  };

  const handleClickUnlike = async () => {
    try {
      setIsLiked(false);
      await deleteInterestedRestaurant(restaurantId);
    } catch (err) {
      setIsLiked(true);
    }
  };

  return isLiked ? (
    <button className="flex h-full flex-1 justify-center gap-4 rounded-[8px] bg-main-600 py-12">
      <IconHeartFilled20 />
      <span className="text-white title-15-md" onClick={handleClickUnlike}>
        관심
      </span>
    </button>
  ) : (
    <button className="flex h-full flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12">
      <IconPlus20 />
      <span className="text-main-700 title-15-md" onClick={handleClickLike}>
        관심 추가
      </span>
    </button>
  );
};

export default RestaurantAddInterestButton;
