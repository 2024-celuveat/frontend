import dynamic from 'next/dynamic';

const ReviewFormPage = dynamic(() => import('./_components/ReviewFormPage'));

async function Page({ searchParams }: { searchParams: { restaurantId: string; reviewId: string } }) {
  return <ReviewFormPage reviewId={searchParams.reviewId} restaurantId={searchParams.restaurantId} />;
}

export default Page;
