import { BestCelebrities, CelebrityDetail } from '@/@types';
import { apiClient } from './instance';

// 인기 셀럽 조회
export const getBestCelebrities = async (): Promise<BestCelebrities[]> => {
  return apiClient('/api/celebrities/best');
};

// 셀럽 정보 조회
export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  return apiClient(`/api/celebrities/${celebrityId}`);
};

// 관심 셀럽 조회
export const getInterestedCelebrities = async (): Promise<CelebrityDetail['celebrity'][]> => {
  return apiClient('/api/celebrities/interested');
};

// 관심 셀럽 추가
export const postInterestedCelebrity = async (celebrityId: number) => {
  await apiClient(`/api/celebrities/interested/${celebrityId}`, { method: 'POST' });
};

// 관심 셀럽 삭제
export const deleteInterestedCelebrity = async (celebrityId: number) => {
  await apiClient(`/api/celebrities/interested/${celebrityId}`, { method: 'DELETE' });
};
