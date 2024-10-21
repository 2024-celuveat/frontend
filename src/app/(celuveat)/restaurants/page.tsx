import { getCelebritiesInRestaurants } from '@/app/(actions)/celebs/actions';
import { getRestaurantsCount } from '@/app/(actions)/restaurants/actions';
import CelebrityFilter from '@/components/CelebrityFilter';

import RestaurantSection from './_components/RestaurantSection';

async function RestaurantListPage({ searchParams }: { searchParams: { category: string; celebrityId: string } }) {
  const restaurantsCountData = getRestaurantsCount(
    searchParams.celebrityId
      ? {
          category: searchParams.category,
          celebrityId: Number(searchParams.celebrityId),
        }
      : {
          category: searchParams.category,
        },
  );
  const celebritiesData = await getCelebritiesInRestaurants();
  const [restaurantsCount, celebrities] = await Promise.all([restaurantsCountData, celebritiesData]);

  return (
    <main className="px-20 py-20">
      <CelebrityFilter celebrities={celebrities} />
      <div className="mt-20 flex justify-between">
        <h2 className="title-20-md">
          <span className="text-main-700 title-20-bold">{restaurantsCount}</span>개 맛집
        </h2>
        <span className="body-13-rg">최신순</span>
      </div>
      <RestaurantSection category={searchParams.category} />
    </main>
  );
}

export default RestaurantListPage;
