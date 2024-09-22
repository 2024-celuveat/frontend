'use client';

import { useRouter } from 'next/navigation';

import { Restaurant } from '@/@types';
import useToast from '@/hooks/useToast';

interface ReviewAddButtonProps {
  restaurantId: Restaurant['id'];
  isLogin: boolean;
}

function ReviewAddButton({ restaurantId, isLogin }: ReviewAddButtonProps) {
  const router = useRouter();
  const showToast = useToast();

  const handleClick = () => {
    if (isLogin) {
      router.push(`/reviews/review?restaurantId=${restaurantId}`);
    } else {
      showToast('로그인이 필요한 서비스입니다.');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-24 flex h-[50px] w-full items-center justify-center rounded-[8px] bg-mainDim-15 text-main-700 title-16-sb"
    >
      방문 리뷰 남기기
    </button>
  );
}

export default ReviewAddButton;
