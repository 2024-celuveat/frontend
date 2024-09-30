import React from 'react';

import { getInterestedCelebrities } from '@/app/(actions)/celebs/actions';
import { getInterestedRestaurants, getInterestedRestaurantsCount } from '@/app/(actions)/restaurants/actions';

import Interested from './_components/Interested';

async function InterestedPage() {
  const interestedRestaurantsData = getInterestedRestaurants();
  const getInterestedRestaurantsCountData = getInterestedRestaurantsCount();
  const interestedCelebritiesData = getInterestedCelebrities();

  const [interestedRestaurants, interestedRestaurantsCount, interestedCelebrities] = await Promise.all([
    interestedRestaurantsData,
    getInterestedRestaurantsCountData,
    interestedCelebritiesData,
  ]);

  return (
    <main className="min-h-[calc(100vh-68px-72px)] p-20">
      <Interested
        interestedRestaurants={interestedRestaurants}
        interestedRestaurantsCount={interestedRestaurantsCount}
        interestedCelebrities={interestedCelebrities}
      />
    </main>
  );
}

export default InterestedPage;
