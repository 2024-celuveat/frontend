import Link from 'next/link';

import { getRestaurants, getRestaurantsCount } from '@/app/(actions)/restaurants/actions';
import IconSearch from '@/components/@icon/IconSearch';

import NaverMap from './_components/NaverMap';
import RestaurantListSection from './_components/RestaurantListSection';

async function MapPage({
  searchParams,
}: {
  searchParams: {
    tab: 'map' | 'list';
    lowLatitude: string;
    lowLongitude: string;
    highLatitude: string;
    highLongitude: string;
  };
}) {
  const { tab = 'map', lowLatitude, lowLongitude, highLatitude, highLongitude } = searchParams;
  const restaurantsData =
    lowLatitude && lowLongitude && highLatitude && highLongitude
      ? await getRestaurants({
          lowLatitude,
          lowLongitude,
          highLatitude,
          highLongitude,
        })
      : {
          contents: [],
          currentPage: 0,
          hasNext: false,
          size: 0,
        };
  const restaurantsCountData =
    lowLatitude && lowLongitude && highLatitude && highLongitude
      ? await getRestaurantsCount({
          lowLatitude,
          lowLongitude,
          highLatitude,
          highLongitude,
        })
      : 0;

  const [restaurants, restaurantsCount] = await Promise.all([restaurantsData, restaurantsCountData]);

  return (
    <main className="relative">
      <div className="absolute left-0 top-24 z-[1] w-full px-20">
        <Link
          href="/search"
          className={`flex w-full items-center rounded-[10px] px-12 py-14 ${tab === 'map' ? 'bg-white' : 'bg-gray-100'}`}
        >
          <IconSearch />
          <p className="ml-10 text-gray-400 body-15-rg">원하는 식당을 검색해보세요</p>
        </Link>
      </div>

      <NaverMap restaurants={restaurants} />

      <RestaurantListSection searchParams={searchParams} restaurantsCount={restaurantsCount} />
    </main>
  );
}

export default MapPage;
