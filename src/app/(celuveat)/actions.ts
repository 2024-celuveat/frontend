import { BestCelebrities, Restaurant } from '@/@types';
import { api } from '@/utils/api';

export const getCelebritiesBest = async (): Promise<BestCelebrities[]> => {
  return await api('/celebrities/best');
};

export const getRecommendedRestaurantsByCelebrities = async (): Promise<Restaurant[]> => {
  return await api('/restaurants/celebrity/recommend');
};
