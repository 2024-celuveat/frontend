'use client';

import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRow from '@/components/RestaurantCardRow';
import RestaurantCardRowSkeleton from '@/components/RestaurantCardRow/RestaurantCardRowSkeleton';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { api } from '@/utils/api';

interface RestaurantSectionProps {
  category: string;
}

function RestaurantSection({ category }: RestaurantSectionProps) {
  const { data, setSize, isLoading } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;
      return `/restaurants?category=${category}&page=${pageIndex}&size=10`;
    },
    api,
  );

  const ref = useInfiniteScroll({
    eventHandler: () => setSize(size => size + 1),
    observerOptions: { threshold: 1 },
  });

  return (
    <ul className="mt-24 flex flex-col gap-20">
      {data?.map(({ contents }) => contents.map(props => <RestaurantCardRow key={props.id} {...props} />))}
      {isLoading && (
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
  );
}

export default RestaurantSection;
