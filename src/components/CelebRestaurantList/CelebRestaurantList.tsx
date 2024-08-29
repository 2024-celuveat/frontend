'use client';

import RestaurantCardRow from '../RestaurantCardRow';
import { Restaurant } from '@/@types';

interface CelebRestaurantListProps {
  restaurants: PagedResponse<Restaurant>;
}

const CelebRestaurantList = ({ restaurants }: CelebRestaurantListProps) => {
  return (
    <ul className="mt-24 flex flex-col gap-20">
      {restaurants.contents.map(props => (
        <RestaurantCardRow key={props.id} {...props} />
      ))}
    </ul>
  );
};

export default CelebRestaurantList;
