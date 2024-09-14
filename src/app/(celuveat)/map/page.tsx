import Link from 'next/link';

import { getRestaurants } from '@/app/(actions)/restaurants/actions';
import IconSearch from '@/components/@icon/IconSearch';
import RestaurantCardRow from '@/components/RestaurantCardRow';

import NaverMap from './_components/NaverMap';

async function MapPage({ searchParams: { tab = 'map' } }: { searchParams: { tab: 'map' | 'list' } }) {
  const restaurants = await getRestaurants({
    region: '서울',
    category: '한식',
    lowLatitude: 29.085082344179696,
    lowLongitude: 124.19130906495111,
    highLatitude: 40.580676585499354,
    highLongitude: 131.56313523682613,
    page: 0,
    size: 100,
    sort: [],
  });

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
          <Link href="/map?tab=list" className="absolute bottom-0 z-[100] block w-full">
            <div className="flex h-[20px] items-center justify-center rounded-t-[16px] bg-white">
              <hr className="h-4 w-48 rounded-[8px] bg-gray-200" />
            </div>
            <div className="h-[20px] bg-white" />
            <div className="h-[40px] bg-white">
              <p className="flex justify-center body-16-md">
                주변에
                <span className="ml-4 text-main-700">50</span> 개 맛집이 있어요!
              </p>
            </div>
          </Link>
        </>
      ) : (
        <div>
          <div className="h-72" />
          <ul className="mt-20 flex flex-col gap-24 px-20">
            {restaurants.contents.map(restaurant => (
              <RestaurantCardRow {...restaurant} />
            ))}
          </ul>
          <Link
            href="/map?tab=map"
            type="button"
            className="fixed bottom-[104px] left-[50%] z-[120] -translate-x-[50%] rounded-[100px] bg-gray-900 px-24 py-16 text-white body-15-rg"
          >
            지도로 보기
          </Link>
        </div>
      )}
    </main>
  );
}

export default MapPage;
