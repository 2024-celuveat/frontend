'use client';

import RestaurantCardRow from '@/components/RestaurantCardRow';
import { useWeeklyRestaurantsCountQuery, useWeeklyRestaurantsQuery } from '@/hooks/server/restaurants';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

function RestaurantListSection() {
  const { data, fetchNextPage } = useWeeklyRestaurantsQuery();
  const { data: restaurantsCount } = useWeeklyRestaurantsCountQuery();

  const ref = useInfiniteScroll({
    eventHandler: fetchNextPage,
    observerOptions: { threshold: 1 },
  });

  return (
    <>
      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">{restaurantsCount}개 매장</h2>
        <span className="body-13-rg">최신순</span>
      </div>
      <ul className="mt-24 flex flex-col gap-20">
        {data.pages.map(page => page.contents.map(props => <RestaurantCardRow key={props.id} {...props} />))}
        {data?.pages.at(-1)?.hasNext && <div ref={ref} />}
      </ul>
    </>
  );
}

export default RestaurantListSection;
