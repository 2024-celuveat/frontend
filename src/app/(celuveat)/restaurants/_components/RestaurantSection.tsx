'use client';

import { ChangeEvent, useCallback, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import RestaurantCardRowInfiniteList from '@/components/RestaurantCardRowInfiniteList';
import useQueryParams from '@/hooks/useQueryParams';
import { api } from '@/utils/api';

interface RestaurantSectionProps {
  category: string;
  restaurantsCount: number;
}

function RestaurantSection({ category, restaurantsCount }: RestaurantSectionProps) {
  const [sortValue, setSortValue] = useState('like');
  const { searchParams } = useQueryParams();
  const { data, setSize, isValidating } = useSWRInfinite<PagedResponse<Restaurant>>(
    (pageIndex, prevData: PagedResponse<Restaurant>) => {
      if (prevData && !prevData.hasNext) return null;

      const id = searchParams.get('celebrityId') ?? '';
      return `/restaurants?category=${category}&page=${pageIndex}&celebrityId=${id}&sort=${sortValue}&size=10`;
    },
    api,
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
      <div className="mt-20 flex justify-between">
        <h2 className="title-20-md">
          <span className="text-main-700 title-20-bold">{restaurantsCount}</span>개 맛집
        </h2>
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

export default RestaurantSection;
