import { Restaurant } from '@/@types';
import { apiClient } from './instance';

// 셀럽이 다녀간 음식점 조회
export const getCelebrityRestaurants = async (
  celebrityId: number,
): Promise<{ contents: Restaurant[]; currentPage: number; hasNext: boolean; size: number }> => {
  return await apiClient(`/api/restaurants/celebrity/${celebrityId}`);
};

// 관심 음식점 조회
export const getInterestedRestaurant = async (): Promise<{
  contents: Restaurant[];
  currentPage: number;
  hasNext: boolean;
  size: number;
}> => {
  return await apiClient('/api/restaurants/interested');
};

// 관심 음식점 추가
export const postInterestedRestaurant = async (restaurantId: number) => {
  await apiClient(`/api/restaurants/interested/${restaurantId}`, { method: 'POST' });
};

// 관심 음식점 삭제
export const deleteInterestedRestaurant = async (restaurantId: number) => {
  await apiClient(`/api/restaurants/interested/${restaurantId}`, { method: 'DELETE' });
};
