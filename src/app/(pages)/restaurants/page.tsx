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
  const celebritiesData = getCelebritiesInRestaurants({
    category: searchParams.category,
  });
  const [restaurantsCount, celebrities] = await Promise.all([restaurantsCountData, celebritiesData]);

  return (
    <main className="px-20 py-20">
      <CelebrityFilter celebrities={celebrities} />
      <RestaurantSection category={searchParams.category} restaurantsCount={restaurantsCount} />
    </main>
  );
}

export default RestaurantListPage;
