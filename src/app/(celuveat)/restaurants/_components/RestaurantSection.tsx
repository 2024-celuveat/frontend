'use client';

import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRowInfiniteList from '@/components/RestaurantCardRowInfiniteList';
import useQueryParams from '@/hooks/useQueryParams';
import { api } from '@/utils/api';

interface RestaurantSectionProps {
  category: string;
}

function RestaurantSection({ category }: RestaurantSectionProps) {
  const { searchParams } = useQueryParams();
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;

      const id = searchParams.get('celebrityId') ?? '';
      return `/restaurants?category=${category}&page=${pageIndex}&size=10&celebrityId=${id}`;
    },
    api,
  );

  const eventHandler = () => {
    if (isValidating) return;
    setSize(size => size + 1);
  };

  return (
    <RestaurantCardRowInfiniteList
      data={data ?? []}
      isValidating={isValidating}
      onIntersect={eventHandler}
      className="mt-24 flex flex-col gap-20"
    />
  );
}

export default RestaurantSection;
