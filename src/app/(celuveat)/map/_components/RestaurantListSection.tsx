'use client';

import Link from 'next/link';
import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRow from '@/components/RestaurantCardRow';
import RestaurantCardRowSkeleton from '@/components/RestaurantCardRow/RestaurantCardRowSkeleton';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { api } from '@/utils/api';

function RestaurantListSection({
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
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;
      return `/restaurants?page=${pageIndex}&size=10&lowLatitude=${searchParams.lowLatitude}&lowLongitude=${searchParams.lowLongitude}&highLatitude=${searchParams.highLatitude}&highLongitude=${searchParams.highLongitude}&zoom=${searchParams.zoom}&centerX=${searchParams.centerX}&centerY=${searchParams.centerY}`;
    },
    api,
  );

  const ref = useInfiniteScroll({
    eventHandler: () => setSize(size => size + 1),
    observerOptions: { threshold: 1 },
  });

  return (
    <div>
      <div className="h-72" />
      <ul className="mt-20 flex flex-col gap-24 px-20">
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
        <div ref={ref} />
      </ul>
      <Link
        href={`/map?tab=map&lowLatitude=${searchParams.lowLatitude}&lowLongitude=${searchParams.lowLongitude}&highLatitude=${searchParams.highLatitude}&highLongitude=${searchParams.highLongitude}&zoom=${searchParams.zoom}&centerX=${searchParams.centerX}&centerY=${searchParams.centerY}`}
        type="button"
        className="fixed bottom-[104px] left-[50%] z-[100] -translate-x-[50%] rounded-[100px] bg-gray-900 px-24 py-16 text-white body-15-rg"
      >
        지도로 보기
      </Link>
    </div>
  );
}

export default RestaurantListSection;
