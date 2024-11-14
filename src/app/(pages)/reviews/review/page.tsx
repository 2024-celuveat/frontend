import Image from 'next/image';

import IconBullet from '@/components/@icon/IconBullet';

import ReviewForm from '../_components/ReviewForm';
import { useRestaurantQuery } from '@/hooks/server/restaurants';
import { useReviewQuery } from '@/hooks/server/reviews';
import { postReview, updateReview } from '../actions';

async function ReviewFormPage({ searchParams }: { searchParams: { restaurantId: string; reviewId: string } }) {
  const { data: restaurant } = useRestaurantQuery(Number(searchParams.restaurantId));
  const { data: review } = useReviewQuery(Number(searchParams.reviewId));
  const action = searchParams.reviewId ? updateReview : postReview;

  return (
    <main className="px-20">
      <section className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-5">
            <span className="text-gray-800 body-14-md">{restaurant.category}</span>
            <IconBullet />
            <span className="text-gray-400 body-14-rg">{restaurant.roadAddress}</span>
          </div>
          <h1 className="text-gray-900 title-22-md">{restaurant.name}</h1>
        </div>

        {restaurant.images[0]?.url && (
          <Image
            src={restaurant.images[0]?.url}
            alt={restaurant.name}
            width={56}
            height={56}
            className="aspect-square rounded-[6px] object-cover"
          />
        )}
      </section>
      <hr className="mt-20 border-gray-100" />
      <form action={action}>
        <input type="hidden" name="reviewId" value={searchParams.reviewId} />
        <ReviewForm restaurantId={searchParams.restaurantId} review={review} />
      </form>
    </main>
  );
}

export default ReviewFormPage;
