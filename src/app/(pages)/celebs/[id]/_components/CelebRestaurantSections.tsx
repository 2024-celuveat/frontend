'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import RestaurantCardRowInfiniteList from '@/components/RestaurantCardRowInfiniteList';
import { useCelebrityRestaurantsCountQuery, useRestaurantsQuery } from '@/hooks/server/restaurants';

interface CelebRestaurantSectionsProps {
  celebrityId: number;
}

function CelebRestaurantSections({ celebrityId }: CelebRestaurantSectionsProps) {
  const { data: celebrityRestaurantsCount } = useCelebrityRestaurantsCountQuery(celebrityId);

  const [sortValue, setSortValue] = useState('like');
  const { data, fetchNextPage } = useRestaurantsQuery({ celebrityId });

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
        data={data?.pages ?? []}
        isValidating
        onIntersect={fetchNextPage}
        className="mt-24 flex flex-col gap-20"
      />
    </>
  );
}

export default CelebRestaurantSections;
