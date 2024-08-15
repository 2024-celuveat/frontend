import { Restaurant } from '@/@types';

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
