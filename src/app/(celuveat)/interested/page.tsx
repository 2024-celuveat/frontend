import React from 'react';

import { getInterestedCelebrities } from '@/app/(actions)/celebs/actions';
import { getInterestedRestaurants } from '@/app/(actions)/restaurants/actions';

import Interested from './_components/Interested';

async function InterestedPage() {
  const interestedRestaurantsData = getInterestedRestaurants();
  const interestedCelebritiesData = getInterestedCelebrities();

  const [interestedRestaurants, interestedCelebrities] = await Promise.all([
    interestedRestaurantsData,
    interestedCelebritiesData,
  ]);

  return (
    <main className="min-h-[calc(100vh-68px-72px)] p-20">
      <Interested interestedRestaurants={interestedRestaurants} interestedCelebrities={interestedCelebrities} />
    </main>
  );
}

export default InterestedPage;
