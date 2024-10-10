'use client';

import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRow from '@/components/RestaurantCardRow';
import RestaurantCardRowSkeleton from '@/components/RestaurantCardRow/RestaurantCardRowSkeleton';
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
  const { data, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;
      return `/restaurants?page=${pageIndex}&size=10&lowLatitude=${searchParams.lowLatitude}&lowLongitude=${searchParams.lowLongitude}&highLatitude=${searchParams.highLatitude}&highLongitude=${searchParams.highLongitude}&zoom=${searchParams.zoom}&centerX=${searchParams.centerX}&centerY=${searchParams.centerY}`;
    },
    api,
  );

  // const ref = useInfiniteScroll({
  //   eventHandler: () => setSize(size => size + 1),
  //   observerOptions: { threshold: 1 },
  // });

  return (
    <div
      className={`absolute bottom-0 z-[100] block w-full ${isList && 'h-[calc(100vh-88px)]'} overflow-hidden`}
      onClick={() => {
        setIsList(true);
      }}
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
      {isList && (
        <div className="h-[calc(100vh-168px)] overflow-y-scroll bg-white pb-8">
          <ul className="flex w-full flex-col gap-24 px-20">
            {data?.map(({ contents }) => contents.map(props => <RestaurantCardRow key={props.id} {...props} />))}
            {isValidating && (
              <>
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
                <RestaurantCardRowSkeleton />
              </>
            )}
            {/* <div ref={ref} /> */}
          </ul>
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
