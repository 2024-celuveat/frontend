'use client';

import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRowInfiniteList from '@/components/RestaurantCardRowInfiniteList';
import { api } from '@/utils/api';

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
  };
  restaurantsCount: number;
}) {
  const [isList, setIsList] = useState(false);
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;
      return `/restaurants?page=${pageIndex}&size=10&lowLatitude=${searchParams.lowLatitude}&lowLongitude=${searchParams.lowLongitude}&highLatitude=${searchParams.highLatitude}&highLongitude=${searchParams.highLongitude}&zoom=${searchParams.zoom}&centerX=${searchParams.centerX}&centerY=${searchParams.centerY}`;
    },
    api,
  );

  const eventHandler = () => {
    if (isValidating) return;
    setSize(size => size + 1);
  };

  return (
    <div
      className={`absolute bottom-0 z-[100] block w-full ${isList && 'h-[calc(100vh-88px)]'} overflow-hidden rounded-t-[16px] bg-white`}
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
      {isList && (
        <div className="h-[calc(100vh-168px)] overflow-y-scroll pb-8">
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
