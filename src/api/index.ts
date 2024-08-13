export * from './login.api';

import { Celeb, CelebritiesBest, Restaurant } from '@/@types';

export const getCelebritiesBest = async (): Promise<CelebritiesBest[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/celebrities/best`);

  return await response.json();
};

export const getCelebsRecommendations = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/main-page/recommendation`);

  return await response.json();
};

export const getCelebsRestaurants = async (): Promise<{ content: Restaurant[] }> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/restaurants/celebrity/recommend`);

  return await response.json();
};

export const getCelebProfiles = async (): Promise<Celeb[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/celebs`);

  return await response.json();
};
