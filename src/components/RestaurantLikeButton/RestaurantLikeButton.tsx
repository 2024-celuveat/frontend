'use client';

import { deleteInterestedRestaurant, postInterestedRestaurant } from '@/app/(actions)/restaurants/actions';
import useOptimisticLike from '@/hooks/useOptimisticLike';

import IconHeartFilled from '../@icon/IconHeartFilled';
import IconHeartOutlined from '../@icon/IconHeartOutlined';

interface RestaurantLikeButtonProps {
  liked: boolean;
  restaurantId: number;
  cn?: string;
}

function RestaurantLikeButton({ liked, restaurantId, cn }: RestaurantLikeButtonProps) {
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike({
    liked,
    onClickLike: () => postInterestedRestaurant(restaurantId),
    onClickCancelLike: () => deleteInterestedRestaurant(restaurantId),
  });

  return (
    <div className={`z-0 ${cn}`}>
      {isLiked ? (
        <IconHeartFilled className="*:fill-main-500" onClick={handleClickCancelLike} />
      ) : (
        <IconHeartOutlined className="*:fill-gray-200" onClick={handleClickLike} />
      )}
    </div>
  );
}

export default RestaurantLikeButton;
