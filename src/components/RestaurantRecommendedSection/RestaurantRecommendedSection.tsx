'use client';

import { useRecommendedRestaurantsByCelebritiesQuery } from '@/hooks/server';
import RestaurantCard from '@/components/RestaurantCard';

const RestaurantRecommendedSection = () => {
  const { data } = useRecommendedRestaurantsByCelebritiesQuery();

  return (
    <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
      {data.reverse().map(restaurant => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
};

export default RestaurantRecommendedSection;
