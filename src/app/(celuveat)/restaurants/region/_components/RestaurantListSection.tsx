'use client';

import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import { getCelebritiesInRestaurants } from '@/app/(actions)/celebs/actions';
import CelebrityFilter from '@/components/CelebrityFilter';
import RestaurantCardRowInfiniteList from '@/components/RestaurantCardRowInfiniteList';
import { clientApi } from '@/utils/clientApi';

function RestaurantListSection({
  searchParams,
  restaurantsCount,
}: {
  searchParams: {
    lowLatitude: string;
    lowLongitude: string;
    highLatitude: string;
    highLongitude: string;
    zoom: string;
    centerX: string;
    centerY: string;
    celebrityId: string;
  };
  restaurantsCount: number;
}) {
  const isFetchEnabled =
    searchParams.lowLatitude && searchParams.lowLongitude && searchParams.highLatitude && searchParams.highLongitude;
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (!isFetchEnabled) return null;
      if (prevData && !prevData.hasNext) return null;

      const urlSearchParams = new URLSearchParams();
      urlSearchParams.set('page', pageIndex.toString());
      urlSearchParams.set('size', '10');
      urlSearchParams.set('lowLatitude', searchParams.lowLatitude);
      urlSearchParams.set('lowLongitude', searchParams.lowLongitude);
      urlSearchParams.set('highLatitude', searchParams.highLatitude);
      urlSearchParams.set('highLongitude', searchParams.highLongitude);
      urlSearchParams.set('zoom', searchParams.zoom);
      urlSearchParams.set('centerX', searchParams.centerX);
      urlSearchParams.set('centerY', searchParams.centerY);
      if (searchParams.celebrityId) {
        urlSearchParams.set('celebrityId', searchParams.celebrityId);
      }

      return `/restaurants?${urlSearchParams.toString()}`;
    },
    clientApi,
  );
  const { data: celebrities } = useSWR<Awaited<ReturnType<typeof getCelebritiesInRestaurants>>>(() => {
    if (!isFetchEnabled) return null;
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('lowLatitude', searchParams.lowLatitude);
    urlSearchParams.set('lowLongitude', searchParams.lowLongitude);
    urlSearchParams.set('highLatitude', searchParams.highLatitude);
    urlSearchParams.set('highLongitude', searchParams.highLongitude);

    return `/celebrities/in/restaurants/condition?${urlSearchParams.toString()}`;
  }, clientApi);

  const eventHandler = () => {
    if (isValidating) return;
    setSize(size => size + 1);
  };

  return (
    <div className="z-[100] flex w-full flex-1 flex-col overflow-hidden bg-white">
      <div className="flex h-[20px] items-center justify-center">
        <hr className="h-4 w-48 rounded-[8px] bg-gray-200" />
      </div>
      <div className="h-[20px]" />
      <div className="h-[40px]">
        {restaurantsCount > 0 ? (
          <p className="flex justify-center body-16-md">
            <span className="ml-4 text-main-700">{restaurantsCount}</span> 개 맛집이 있어요!
          </p>
        ) : (
          <p className="flex justify-center body-16-md">주변에 추천할 맛집이 없습니다.</p>
        )}
      </div>
      {celebrities && (
        <div className="px-20">
          <CelebrityFilter celebrities={celebrities} />
        </div>
      )}
      <div className="mt-16 flex-1 overflow-y-scroll pb-8">
        <RestaurantCardRowInfiniteList
          data={data ?? []}
          isValidating={isValidating}
          onIntersect={eventHandler}
          className="flex w-full flex-col gap-24 px-20"
        />
      </div>
    </div>
  );
}

export default RestaurantListSection;
