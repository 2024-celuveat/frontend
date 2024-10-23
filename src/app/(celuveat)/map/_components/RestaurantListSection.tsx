'use client';

import { useState } from 'react';
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
    tab: 'map' | 'list';
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
  const [isList, setIsList] = useState(false);
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
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
    <div
      className={`absolute bottom-0 z-[100] block w-full ${isList ? 'h-[calc(100vh-88px)]' : 'rounded-t-[16px]'} overflow-hidden bg-white`}
      onClick={() => {
        setIsList(true);
      }}
    >
      <div className="flex h-[20px] items-center justify-center">
        <hr className="h-4 w-48 rounded-[8px] bg-gray-200" />
      </div>
      <div className="h-[20px]" />
      <div className="h-[40px]">
        <p className="flex justify-center body-16-md">
          주변에
          <span className="ml-4 text-main-700">{restaurantsCount}</span> 개 맛집이 있어요!
        </p>
      </div>
      {isList && celebrities && (
        <div className="px-20">
          <CelebrityFilter celebrities={celebrities} />
        </div>
      )}
      {isList && (
        <div className="mt-16 h-[calc(100vh-224px)] overflow-y-scroll pb-8">
          <RestaurantCardRowInfiniteList
            data={data ?? []}
            isValidating={isValidating}
            onIntersect={eventHandler}
            className="flex w-full flex-col gap-24 px-20"
          />
          <button
            type="button"
            className="fixed bottom-[104px] left-[50%] z-[100] -translate-x-[50%] rounded-[100px] bg-gray-900 px-24 py-16 text-white body-15-rg"
            onClick={e => {
              e.stopPropagation();
              setIsList(false);
            }}
          >
            지도로 보기
          </button>
        </div>
      )}
    </div>
  );
}

export default RestaurantListSection;
