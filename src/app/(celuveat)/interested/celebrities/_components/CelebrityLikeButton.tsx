'use client';

import { postInterestedCelebrity, deleteInterestedCelebrity } from '@/app/(actions)/celebs/actions';
import IconHeartFilled from '@/components/@icon/IconHeartFilled';
import IconHeartOutlined from '@/components/@icon/IconHeartOutlined';
import useOptimisticLike from '@/hooks/useOptimisticLike';

interface CelebrityLikeButtonProps {
  celebrityId: number;
}

const CelebrityLikeButton = ({ celebrityId }: CelebrityLikeButtonProps) => {
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike({
    liked: true,
    onClickLike: () => postInterestedCelebrity(celebrityId),
    onClickCancelLike: () => deleteInterestedCelebrity(celebrityId),
  });

  return isLiked ? (
    <IconHeartFilled className="*:fill-main-500" onClick={handleClickCancelLike} />
  ) : (
    <IconHeartOutlined className="*:fill-gray-200" onClick={handleClickLike} />
  );
};

export default CelebrityLikeButton;
