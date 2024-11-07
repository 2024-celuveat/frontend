import { getUserProfile } from '@/app/(actions)/members/actions';
import { getRestaurantReviews } from '@/app/(actions)/reviews/actions';
import ReviewCard from '@/components/ReviewCard';

async function RestaurantReviewPage({ searchParams }: { searchParams: { restaurantId: string } }) {
  const reviewsData = getRestaurantReviews(Number(searchParams.restaurantId));
  const myProfileData = getUserProfile();

  const [reviews, myProfile] = await Promise.all([reviewsData, myProfileData]);

  return (
    <ul className="mt-16 flex flex-col px-20">
      {reviews?.contents.map(review => (
        <>
          <ReviewCard key={review.id} review={review} isMyReview={myProfile.id === review.writer.id} />
          <hr className="my-16 h-1 w-full bg-gray-100" />
        </>
      ))}
    </ul>
  );
}

export default RestaurantReviewPage;
