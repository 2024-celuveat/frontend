import { BestCelebrities, CelebrityDetail } from '@/@types';
import { api, apiClient } from '@/utils/api';

// 인기 셀럽 조회
export const getBestCelebritiesOnServer = async (): Promise<BestCelebrities[]> => {
  const response = await api(`/celebrities/best`);

  return await response.json();
};
export const getBestCelebrities = async (): Promise<BestCelebrities[]> => {
  const response = await apiClient(`/celebrities/best`);

  return await response.json();
};

// 셀럽 정보 조회
export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  const response = await apiClient(`/celebrities/${celebrityId}`);

  return await response.json();
};

// 관심 셀럽 조회
export const getInterestedCelebrities = async (): Promise<CelebrityDetail['celebrity'][]> => {
  const response = await apiClient('/celebrities/interested');

  return await response.json();
};

// 관심 셀럽 추가
export const postInterestedCelebrity = async (celebrityId: number) => {
  await apiClient(`/celebrities/interested/${celebrityId}`, { method: 'POST' });
};

// 관심 셀럽 삭제
export const deleteInterestedCelebrity = async (celebrityId: number) => {
  await apiClient(`/celebrities/interested/${celebrityId}`, { method: 'DELETE' });
};
