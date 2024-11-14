'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import RestaurantCardRow from '@/components/RestaurantCardRow';
import { useCelebrityRestaurantsCountQuery, useRestaurantsQuery } from '@/hooks/server/restaurants';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

interface CelebRestaurantSectionsProps {
  celebrityId: number;
}

function CelebRestaurantSections({ celebrityId }: CelebRestaurantSectionsProps) {
  const { data: celebrityRestaurantsCount } = useCelebrityRestaurantsCountQuery(celebrityId);

  const [sortValue, setSortValue] = useState('like');
  const { data, fetchNextPage } = useRestaurantsQuery({ celebrityId });

  const ref = useInfiniteScroll({
    eventHandler: fetchNextPage,
  });

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
      <ul className="flex w-full flex-col gap-24 px-20">
        {data?.pages.map(({ contents }) => contents.map(props => <RestaurantCardRow key={props.id} {...props} />))}
        {data?.pages.at(-1)?.hasNext && <div ref={ref} />}
      </ul>
    </>
  );
}

export default CelebRestaurantSections;
