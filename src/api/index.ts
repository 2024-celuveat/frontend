export * from './login.api';

import { BestCelebrities, Restaurant, CelebrityDetail } from '@/@types';

export const getBestCelebrities = async (): Promise<BestCelebrities[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/celebrities/best`);

  return await response.json();
};

export const getRecommendedRestaurantsByCelebrities = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/restaurants/celebrity/recommend`);

  return await response.json();
};

export const getCelebrityRestaurants = async (
  celebrityId: number,
): Promise<{ contents: Restaurant[]; currentPage: number; hasNext: boolean; size: number }> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/restaurants/celebrity/${celebrityId}`);

  return await response.json();
};

export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/celebrities/${celebrityId}`);

  return await response.json();
};
