import { Restaurant } from '@/@types';
import { api } from '@/utils/api';

// 셀럽 추천 음식점 조회
export const getRecommendedRestaurantsByCelebrities = async (): Promise<Restaurant[]> => {
  const response = await api(`/restaurants/celebrity/recommend`);

  return await response.json();
};

// 셀럽이 다녀간 음식점 조회
export const getCelebrityRestaurants = async (
  celebrityId: number,
): Promise<{ contents: Restaurant[]; currentPage: number; hasNext: boolean; size: number }> => {
  const response = await api(`/restaurants/celebrity/${celebrityId}`);

  return await response.json();
};

// 관심 음식점 조회
export const getInterestedRestaurant = async (): Promise<{
  contents: Restaurant[];
  currentPage: number;
  hasNext: boolean;
  size: number;
}> => {
  const response = await api('/restaurants/interested');

  return await response.json();
};

// 관심 음식점 추가
export const postInterestedRestaurant = async (restaurantId: number) => {
  await api(`/restaurants/interested/${restaurantId}`, { method: 'POST' });
};

// 관심 음식점 삭제
export const deleteInterestedRestaurant = async (restaurantId: number) => {
  await api(`/restaurants/interested/${restaurantId}`, { method: 'DELETE' });
};
