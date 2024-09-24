'use client';

import { motion } from 'framer-motion';

import { deleteInterestedRestaurant, postInterestedRestaurant } from '@/app/(actions)/restaurants/actions';
import useOptimisticLike from '@/hooks/useOptimisticLike';

import IconHeartFilled from '../@icon/IconHeartFilled';
import IconHeartOutlined from '../@icon/IconHeartOutlined';

interface RestaurantLikeButtonProps {
  liked: boolean;
  restaurantId: number;
  isRow?: boolean;
}

function RestaurantLikeButton({ liked, restaurantId, isRow }: RestaurantLikeButtonProps) {
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike({
    liked,
    onClickLike: () => postInterestedRestaurant(restaurantId),
    onClickCancelLike: () => deleteInterestedRestaurant(restaurantId),
  });

  return (
    <div
      className={`absolute right-4 top-4 z-0 flex h-28 w-28 items-center justify-center rounded-[8px] ${isRow ? '' : 'bg-dim-25'}`}
    >
      <motion.button whileTap={{ scaleY: 0.7 }}>
        {isLiked ? (
          <IconHeartFilled className="*:fill-main-500" onClick={handleClickCancelLike} />
        ) : (
          <IconHeartOutlined className="*:fill-gray-200" onClick={handleClickLike} />
        )}
      </motion.button>
    </div>
  );
}

export default RestaurantLikeButton;
