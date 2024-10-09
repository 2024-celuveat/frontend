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
    zoom: string;
    centerX: string;
    centerY: string;
  };
}) {
  const { tab = 'map', lowLatitude, lowLongitude, highLatitude, highLongitude, zoom, centerX, centerY } = searchParams;
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
      {tab === 'map' ? (
        <>
          <NaverMap restaurants={restaurants} />
          <Link
            href={`/map?tab=list&lowLatitude=${lowLatitude}&lowLongitude=${lowLongitude}&highLatitude=${highLatitude}&highLongitude=${highLongitude}&zoom=${zoom}&centerX=${centerX}&centerY=${centerY}`}
            className="absolute bottom-0 z-[100] block w-full"
          >
            <div className="flex h-[20px] items-center justify-center rounded-t-[16px] bg-white">
              <hr className="h-4 w-48 rounded-[8px] bg-gray-200" />
            </div>
            <div className="h-[20px] bg-white" />
            <div className="h-[40px] bg-white">
              <p className="flex justify-center body-16-md">
                주변에
                <span className="ml-4 text-main-700">{restaurantsCount}</span> 개 맛집이 있어요!
              </p>
            </div>
          </Link>
        </>
      ) : (
        <RestaurantListSection searchParams={searchParams} />
      )}
    </main>
  );
}

export default MapPage;
