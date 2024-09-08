import { getRestaurantReviews } from '@/app/(actions)/reviews/actions';
import ReviewSummaryCard from '@/components/ReviewSummaryCard';

async function RestaurantReviewPage({ params }: { params: { restaurantId: string } }) {
  const reviews = await getRestaurantReviews(Number(params.restaurantId));

  return (
    <ul className="mt-16 flex flex-col px-20">
      {reviews?.contents.map(review => (
        <>
          <ReviewSummaryCard key={review.id} review={review} />
          <hr className="my-16 h-1 w-full bg-gray-100" />
        </>
      ))}
    </ul>
  );
}

export default RestaurantReviewPage;
