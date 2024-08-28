import { Restaurant } from '@/@types';
import { api } from '@/utils/api';

// 셀럽 추천 음식점 조회
export const getRecommendedRestaurantsByCelebrities = async (): Promise<Restaurant[]> => {
  const response = await fetch('/api/restaurants/celebrity/recommend');
  const { data } = await response.json();
  return data;
};

// 셀럽이 다녀간 음식점 조회
export const getCelebrityRestaurants = async (
  celebrityId: number,
): Promise<{ contents: Restaurant[]; currentPage: number; hasNext: boolean; size: number }> => {
  const response = await fetch(`api/restaurants/celebrity/${celebrityId}`);
  const { data } = await response.json();
  return data;
};

// 관심 음식점 조회
export const getInterestedRestaurant = async (): Promise<{
  contents: Restaurant[];
  currentPage: number;
  hasNext: boolean;
  size: number;
}> => {
  const response = await fetch('api/restaurants/interested');
  const { data } = await response.json();
  return data;
};

// 관심 음식점 추가
export const postInterestedRestaurant = async (restaurantId: number) => {
  await api(`api/restaurants/interested/${restaurantId}`, { method: 'POST' });
};

// 관심 음식점 삭제
export const deleteInterestedRestaurant = async (restaurantId: number) => {
  await api(`api/restaurants/interested/${restaurantId}`, { method: 'DELETE' });
};
