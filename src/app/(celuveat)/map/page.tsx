import { getRestaurants } from '@/app/(actions)/restaurants/actions';
import IconSearch from '@/components/@icon/IconSearch';
import NaverMap from '@/components/NaverMap';
import Link from 'next/link';

const MapPage = async () => {
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
        <Link href={'/search'} className="flex w-full items-center rounded-[10px] bg-white px-12 py-14">
          <IconSearch />
          <p className="ml-10 text-gray-400 body-15-rg">원하는 식당을 검색해보세요</p>
        </Link>
      </div>
      <NaverMap restaurants={restaurants} />
    </main>
  );
};

export default MapPage;
