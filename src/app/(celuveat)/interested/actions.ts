import { CelebrityDetail, Restaurant } from '@/@types';
import { api } from '@/app/actions';

// 관심 셀럽 조회
export const getInterestedCelebrities = async (): Promise<CelebrityDetail['celebrity'][]> => {
  return await api('/celebrities/interested');
};

// 관심 음식점 조회
export const getInterestedRestaurants = async (): Promise<PagedResponse<Restaurant>> => {
  return await api('/api/restaurants/interested');
};
