import { CenterOption, CoordinateOption, ZoomOption } from '@/@types/util';
import { getRestaurants, getRestaurantsCount } from '@/app/(actions)/restaurants/actions';
import NaverMap from '@/components/NaverMap';

import RestaurantListSection from './_components/RestaurantListSection';

async function RestaurantListPage({
  searchParams,
}: {
  searchParams: { region: string; celebrityId: string } & CenterOption & CoordinateOption & ZoomOption;
}) {
  const { lowLatitude, lowLongitude, highLatitude, highLongitude } = searchParams;
  const restaurantsData = lowLatitude
    ? await getRestaurants({
        lowLatitude,
        lowLongitude,
        highLatitude,
        highLongitude,
      })
    : null;
  const restaurantsCountData = getRestaurantsCount({
    lowLatitude,
    lowLongitude,
    highLatitude,
    highLongitude,
  });
  const [restaurants, restaurantsCount] = await Promise.all([restaurantsData, restaurantsCountData]);

  return (
    <main className="flex h-[calc(100vh-146px)] flex-col">
      <NaverMap restaurants={restaurants} cn="h-[300px]" />
      <RestaurantListSection searchParams={searchParams} restaurantsCount={restaurantsCount} />
    </main>
  );
}

export default RestaurantListPage;
