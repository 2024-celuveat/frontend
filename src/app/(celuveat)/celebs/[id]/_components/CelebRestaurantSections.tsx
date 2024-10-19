'use client';

import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRowInfiniteList from '@/components/RestaurantCardRowInfiniteList';
import { clientApi } from '@/utils/clientApi';

interface CelebRestaurantSectionsProps {
  celebrityId: number;
}

function CelebRestaurantSections({ celebrityId }: CelebRestaurantSectionsProps) {
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;
      return `/restaurants/celebrity/${celebrityId}?page=${pageIndex}&size=10`;
    },
    clientApi,
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

export default CelebRestaurantSections;
