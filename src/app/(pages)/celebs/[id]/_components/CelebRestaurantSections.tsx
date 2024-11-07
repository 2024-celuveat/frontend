'use client';

import { ChangeEvent, useCallback, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRowInfiniteList from '@/components/RestaurantCardRowInfiniteList';
import { clientApi } from '@/utils/clientApi';

interface CelebRestaurantSectionsProps {
  celebrityRestaurantsCount: number;
  celebrityId: number;
}

function CelebRestaurantSections({ celebrityId, celebrityRestaurantsCount }: CelebRestaurantSectionsProps) {
  const [sortValue, setSortValue] = useState('like');
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;
      return `/restaurants/celebrity/${celebrityId}?page=${pageIndex}&sort=${sortValue}&size=10`;
    },
    clientApi,
  );

  const eventHandler = () => {
    if (isValidating) return;
    setSize(size => size + 1);
  };

  const handleSortValueChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
  }, []);

  return (
    <>
      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">{celebrityRestaurantsCount}개 매장</h2>
        <select className="body-13-rg" defaultValue={sortValue} onChange={handleSortValueChange}>
          <option value="createdAt">최신순</option>
          <option value="review">리뷰순</option>
          <option value="like">좋아요순</option>
        </select>
      </div>
      <RestaurantCardRowInfiniteList
        data={data ?? []}
        isValidating={isValidating}
        onIntersect={eventHandler}
        className="mt-24 flex flex-col gap-20"
      />
    </>
  );
}

export default CelebRestaurantSections;
