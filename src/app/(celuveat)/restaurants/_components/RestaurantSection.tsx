'use client';

import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRowInfiniteList from '@/components/RestaurantCardRowInfiniteList';
import { api } from '@/utils/api';

interface RestaurantSectionProps {
  category: string;
}

function RestaurantSection({ category }: RestaurantSectionProps) {
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;
      return `/restaurants?category=${category}&page=${pageIndex}&size=10`;
    },
    api,
  );

  const eventHandler = () => {
    if (isValidating) return;
    setSize(size => size + 1);
  };

  return <RestaurantCardRowInfiniteList data={data ?? []} isValidating={isValidating} onIntersect={eventHandler} />;
}

export default RestaurantSection;
