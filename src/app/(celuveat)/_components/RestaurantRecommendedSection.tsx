'use client';

import { Restaurant } from '@/@types';
import RestaurantCard from '@/components/RestaurantCard';

interface RestaurantRecommendedSectionProps {
  restaurants: Restaurant[];
}
function RestaurantRecommendedSection({ restaurants }: RestaurantRecommendedSectionProps) {
  return (
    <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
      {restaurants?.reverse().map(restaurant => <RestaurantCard key={restaurant.id} {...restaurant} />)}
    </div>
  );
}

export default RestaurantRecommendedSection;
