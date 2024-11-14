'use client';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import RestaurantCardRow from '../RestaurantCardRow/RestaurantCardRow';

interface RestaurantCardRowInfiniteListProps {
  data: PagedResponse<Restaurant>[];
  className: string;
  onIntersect: () => void;
}

function RestaurantCardRowInfiniteList({ data, className, onIntersect }: RestaurantCardRowInfiniteListProps) {
  const ref = useInfiniteScroll({
    eventHandler: onIntersect,
    observerOptions: { threshold: 1 },
  });

  return (
    <ul className={className}>
      {data?.map(({ contents }) => contents.map(props => <RestaurantCardRow key={props.id} {...props} />))}
      <div className="h-8" ref={ref} />
    </ul>
  );
}

export default RestaurantCardRowInfiniteList;
