import RestaurantDetailPage from './_components/RestaurantDetailPage';

async function Page({ params }: { params: { restaurantId: string } }) {
  return <RestaurantDetailPage restaurantId={Number(params.restaurantId)} />;
}

export default Page;
