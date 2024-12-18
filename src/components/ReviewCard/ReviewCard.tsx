'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { overlay } from 'overlay-kit';

import IconMore from '@/components/@icon/IconMore';
import BottomSheet from '@/components/@ui/BottomSheet';
import Avatar from '@/components/Avatar';
import RestaurantReviewLikeButton from '@/components/RestaurantReviewLikeButton';
import { colors } from '@/constants/colors';
import { useDeleteReviewMutation } from '@/hooks/server/reviews';
import useToast from '@/hooks/useToast';
import { Review } from '@/remotes/reviews';
import { formatDate } from '@/utils/formatDate';

import IconStarFilled from '../@icon/IconStarFilled';

interface ReviewCardProps {
  isMyReview: boolean;
  review: Review;
}

function ReviewCard({ review, isMyReview }: ReviewCardProps) {
  const { mutate: mutateDeleteReview } = useDeleteReviewMutation();
  const showToast = useToast();
  const router = useRouter();

  const openBottomSheet = () => {
    overlay.open(({ isOpen, close }) => {
      const handleModifyReview = () => {
        close();
        router.push(`/reviews/review?restaurantId=${review.restaurantId}&reviewId=${review.id}`);
      };

      const handleDeleteReview = async () => {
        await mutateDeleteReview(review.id);
        close();
        showToast('리뷰가 삭제되었습니다.');
      };

      return (
        <BottomSheet open={isOpen} onClose={close}>
          {isMyReview && (
            <>
              <button
                type="button"
                onClick={handleModifyReview}
                className="flex h-56 w-full items-center justify-center"
              >
                <span className="title-16-sb">수정하기</span>
              </button>
              <button
                type="button"
                onClick={handleDeleteReview}
                className="flex h-56 w-full items-center justify-center"
              >
                <span className="title-16-sb">삭제하기</span>
              </button>
            </>
          )}
          {!isMyReview && (
            <button type="button" className="flex h-56 w-full items-center justify-center">
              <span className="title-16-sb">신고하기</span>
            </button>
          )}
          <button
            type="button"
            className="mt-16 flex h-56 w-full items-center justify-center gap-8 rounded-[8px] bg-gray-100"
            onClick={close}
          >
            <span className="body-16-md">닫기</span>
          </button>
        </BottomSheet>
      );
    });
  };

  return (
    <li>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Avatar imageUrl={review.writer.profileImageUrl} size={25} alt={review.writer.nickname} />
          <span className="text-gray-900 title-16-sb">{review.writer.nickname}</span>
          <span className="text-gray-400 caption-12-rg">{formatDate(review.updatedAt)}</span>
        </div>
        <button type="button" onClick={openBottomSheet}>
          <IconMore />
        </button>
      </div>

      <div className="mt-10 flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <IconStarFilled key={index} fill={index < review.star ? colors.sub.orange : colors.gray[200]} />
        ))}
      </div>

      <p className="mt-12 text-gray-900 body-13-rg">{review.content}</p>

      <div className="mt-[14px] flex gap-8">
        {review.images.map(img => (
          <div key={img} className="relative aspect-square w-1/3">
            <Image key={img} src={img} fill sizes="33%" alt="이미지 업로드" className="rounded-[8px] object-cover" />
          </div>
        ))}
      </div>
      <RestaurantReviewLikeButton reviewId={review.id} helps={review.helps} clickedHelpful={review.clickedHelpful} />
    </li>
  );
}

export default ReviewCard;
