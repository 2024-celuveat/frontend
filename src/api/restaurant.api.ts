import { Restaurant } from '@/@types';
import { api } from '@/utils/api';

export const getRecommendedRestaurantsByCelebrities = async (): Promise<Restaurant[]> => {
  const response = await api(`/restaurants/celebrity/recommend`);

  return await response.json();
};

export const getCelebrityRestaurants = async (
  celebrityId: number,
): Promise<{ contents: Restaurant[]; currentPage: number; hasNext: boolean; size: number }> => {
  const response = await api(`/restaurants/celebrity/${celebrityId}`);

  return await response.json();
};
