'use client';

import { useCelebrityRestaurantsQuery } from '@/hooks/server';
import RestaurantCardRow from '../RestaurantCardRow';

interface CelebRestaurantListProps {
  celebId: number;
}

const CelebRestaurantList = ({ celebId }: CelebRestaurantListProps) => {
  const { data } = useCelebrityRestaurantsQuery(celebId);

  return (
    <ul className="mt-24 flex flex-col gap-20">
      {data?.contents?.map(props => <RestaurantCardRow key={props.id} {...props} />)}
    </ul>
  );
};

export default CelebRestaurantList;
