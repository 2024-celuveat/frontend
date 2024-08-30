import { BestCelebrities, Restaurant } from '@/@types';
import { api } from '@/utils/api';

export const getCelebritiesBest = async (): Promise<BestCelebrities[]> => {
  return await api('/celebrities/best');
};

export const getRecommendedRestaurantsByCelebrities = async (): Promise<Restaurant[]> => {
  return await api('/restaurants/celebrity/recommend');
};

// 관심 음식점 조회
export const getInterestedRestaurants = async (): Promise<PagedResponse<Restaurant>> => {
  return await api('/restaurants/interested');
};

// 셀럽이 다녀간 음식점 조회
export const getCelebrityRestaurants = async (celebrityId: number): Promise<PagedResponse<Restaurant>> => {
  return await api(`/restaurants/celebrity/${celebrityId}`);
};

// 관심 음식점 추가
export const postInterestedRestaurant = async (restaurantId: number) => {
  await api(`/restaurants/interested/${restaurantId}`, { method: 'POST' });
};

// 관심 음식점 삭제
export const deleteInterestedRestaurant = async (restaurantId: number) => {
  await api(`/restaurants/interested/${restaurantId}`, { method: 'DELETE' });
};
