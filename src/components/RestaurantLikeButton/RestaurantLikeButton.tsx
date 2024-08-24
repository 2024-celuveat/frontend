'use client';

import { IconHeartEmpty24, IconHeartFilled24 } from '@/assets/icons';
import { useDeleteInterestedRestaurantMutation, useInterestedRestaurantMutation } from '@/hooks/server';
import { useState } from 'react';

interface RestaurantLikeButtonProps {
  liked: boolean;
  restaurantId: number;
  cn?: string;
}

const RestaurantLikeButton = ({ liked, restaurantId, cn }: RestaurantLikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  const { mutateAsync } = useInterestedRestaurantMutation();
  const { mutateAsync: deleteMutateAsync } = useDeleteInterestedRestaurantMutation();

  const handleClickLike = async () => {
    try {
      await mutateAsync(restaurantId);
      setIsLiked(true);
    } catch (err) {
      setIsLiked(false);
    }
  };

  const handleClickUnlike = async () => {
    try {
      await deleteMutateAsync(restaurantId);
      setIsLiked(false);
    } catch (err) {
      setIsLiked(true);
    }
  };

  return (
    <div className={`z-0 ${cn}`}>
      {isLiked ? (
        <IconHeartFilled24 className="*:fill-main-500" onClick={handleClickUnlike} />
      ) : (
        <IconHeartEmpty24 className="*:fill-white" onClick={handleClickLike} />
      )}
    </div>
  );
};

export default RestaurantLikeButton;
