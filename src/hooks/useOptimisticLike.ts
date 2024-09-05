import { deleteInterestedRestaurant, postInterestedRestaurant } from '@/app/(actions)/restaurants/actions';
import { useState } from 'react';

interface Props {
  liked: boolean;
  onClickLike: () => Promise<void>;
  onClickCancelLike: () => Promise<void>;
}

const useOptimisticLike = ({ liked, onClickLike, onClickCancelLike }: Props) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleClickLike = async () => {
    try {
      setIsLiked(true);
      await onClickLike();
    } catch (err) {
      setIsLiked(false);
    }
  };

  const handleClickCancelLike = async () => {
    try {
      setIsLiked(false);
      await onClickCancelLike();
    } catch (err) {
      setIsLiked(true);
    }
  };

  return { isLiked, handleClickLike, handleClickCancelLike };
};

export default useOptimisticLike;
