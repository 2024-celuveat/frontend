'use client';

import IconHeartFilled from '@/components/@icon/IconHeartFilled';
import IconHeartOutlined from '@/components/@icon/IconHeartOutlined';
import { useDeleteInterestedCelebrityMutation, useInterestedCelebrityMutation } from '@/hooks/server/celebs';
import useOptimisticLike from '@/hooks/useOptimisticLike';

interface CelebrityLikeButtonProps {
  celebrityId: number;
}

function CelebrityLikeButton({ celebrityId }: CelebrityLikeButtonProps) {
  const { mutate: mutateLike } = useInterestedCelebrityMutation();
  const { mutate: mutateCancelLike } = useDeleteInterestedCelebrityMutation();
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike({
    liked: true,
    onClickLike: () => mutateLike(celebrityId),
    onClickCancelLike: () => mutateCancelLike(celebrityId),
  });

  return isLiked ? (
    <IconHeartFilled className="*:fill-main-500" onClick={handleClickCancelLike} />
  ) : (
    <IconHeartOutlined className="*:fill-gray-200" onClick={handleClickLike} />
  );
}

export default CelebrityLikeButton;
