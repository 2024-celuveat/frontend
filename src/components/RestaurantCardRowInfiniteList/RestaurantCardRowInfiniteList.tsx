'use client';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import RestaurantCardRow from '../RestaurantCardRow/RestaurantCardRow';
import RestaurantCardRowSkeleton from '../RestaurantCardRow/RestaurantCardRowSkeleton';

interface RestaurantCardRowInfiniteListProps {
  data: PagedResponse<Restaurant>[];
  isValidating: boolean;
  className: string;
  onIntersect: () => void;
}

function RestaurantCardRowInfiniteList({
  data,
  isValidating,
  className,
  onIntersect,
}: RestaurantCardRowInfiniteListProps) {
  const ref = useInfiniteScroll({
    eventHandler: onIntersect,
    observerOptions: { threshold: 1 },
  });

  return (
    <ul className={className}>
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
      {!isValidating && data && data.at(-1)?.hasNext && <div className="h-8" ref={ref} />}
    </ul>
  );
}

export default RestaurantCardRowInfiniteList;
