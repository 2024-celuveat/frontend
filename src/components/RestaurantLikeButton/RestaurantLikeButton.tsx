'use client';

import { deleteInterestedRestaurant, postInterestedRestaurant } from '@/app/(celuveat)/restaurant/actions';
import { IconHeartEmpty24, IconHeartFilled24 } from '@/assets/icons';
import { useState } from 'react';

interface RestaurantLikeButtonProps {
  liked: boolean;
  restaurantId: number;
  cn?: string;
}

const RestaurantLikeButton = ({ liked, restaurantId, cn }: RestaurantLikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleClickLike = async () => {
    try {
      setIsLiked(false);
      await postInterestedRestaurant(restaurantId);
    } catch (err) {
      setIsLiked(true);
    }
  };

  const handleClickUnlike = async () => {
    try {
      setIsLiked(true);
      await deleteInterestedRestaurant(restaurantId);
    } catch (err) {
      setIsLiked(false);
    }
  };

  return (
    <div className={`z-0 ${cn}`}>
      {isLiked ? (
        <IconHeartFilled24 className="*:fill-main-500" onClick={handleClickUnlike} />
      ) : (
        <IconHeartEmpty24 className="*:fill-gray-200" onClick={handleClickLike} />
      )}
    </div>
  );
};

export default RestaurantLikeButton;
