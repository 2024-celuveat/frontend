'use client';

import { Review } from '@/app/(actions)/reviews/actions';
import IconMore from '@/components/@icon/IconMore';
import Avatar from '@/components/Avatar';
import RestaurantReviewLikeButton from '@/components/RestaurantReviewLikeButton';
import StarRating from '@/components/StarRating';
import { formatDate } from '@/utils/formatDate';

interface ReviewSummaryCardProps {
  review: Review;
}

function ReviewSummaryCard({ review }: ReviewSummaryCardProps) {
  return (
    <li>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Avatar imageUrl={review.writer.profileImageUrl} size={25} alt={review.writer.nickname} />
          <span className="text-gray-900 title-16-sb">{review.writer.nickname}</span>
          <span className="text-gray-400 caption-12-rg">{formatDate(review.updatedAt)}</span>
        </div>
        <IconMore />
      </div>

      <StarRating rating={review.star} />

      <p className="mt-12 text-gray-900 body-13-rg">{review.content}</p>

      <RestaurantReviewLikeButton reviewId={review.id} helps={review.helps} clickedHelpful={review.clickedHelpful} />
    </li>
  );
}

export default ReviewSummaryCard;
