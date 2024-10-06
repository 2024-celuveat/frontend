import { getRestaurantsCount } from '@/app/(actions)/restaurants/actions';

import RestaurantSection from './_components/RestaurantSection';

async function RestaurantListPage({ searchParams }: { searchParams: { category: string } }) {
  const restaurantsCount = await getRestaurantsCount({
    category: searchParams.category,
  });

  return (
    <main className="px-20">
      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">{restaurantsCount}개 매장</h2>
        <span className="body-13-rg">최신순</span>
      </div>
      <RestaurantSection category={searchParams.category} />
    </main>
  );
}

export default RestaurantListPage;
