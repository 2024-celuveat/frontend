import Link from 'next/link';

import IconSearch from '@/components/@icon/IconSearch';
import NaverMap from '@/components/NaverMap';

import RestaurantListSection from './_components/RestaurantListSection';

async function MapPage({
  searchParams,
}: {
  searchParams: {
    tab: 'map' | 'list';
    celebrityId: string;
  };
}) {
  return (
    <main className="relative">
      <div className="absolute left-0 top-24 z-[1] w-full px-20">
        <Link
          href="/search"
          className={`flex w-full items-center rounded-[10px] px-12 py-14 ${searchParams.tab === 'map' ? 'bg-white' : 'bg-gray-100'}`}
        >
          <IconSearch />
          <p className="ml-10 text-gray-400 body-15-rg">원하는 식당을 검색해보세요</p>
        </Link>
      </div>
      <NaverMap cn="h-[calc(100vh_-_88px)] w-full" />
      <RestaurantListSection />
    </main>
  );
}

export default MapPage;
