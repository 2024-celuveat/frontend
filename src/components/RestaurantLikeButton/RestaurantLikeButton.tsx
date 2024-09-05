'use client';

import { deleteInterestedRestaurant, postInterestedRestaurant } from '@/app/(actions)/restaurants/actions';
import IconHeartFilled from '../@icon/IconHeartFilled';
import IconHeartOutlined from '../@icon/IconHeartOutlined';
import useOptimisticLike from '@/hooks/useOptimisticLike';

interface RestaurantLikeButtonProps {
  liked: boolean;
  restaurantId: number;
  cn?: string;
}

const RestaurantLikeButton = ({ liked, restaurantId, cn }: RestaurantLikeButtonProps) => {
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
};

export default RestaurantLikeButton;
