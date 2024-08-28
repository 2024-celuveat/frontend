import { BestCelebrities, CelebrityDetail } from '@/@types';
import { api } from '@/utils/api';

// 인기 셀럽 조회
export const getBestCelebrities = async (): Promise<BestCelebrities[]> => {
  const response = await fetch('/api/celebrities/best');
  const { data } = await response.json();
  return data;
};

// 셀럽 정보 조회
export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  const response = await api(`/celebrities/${celebrityId}`);

  return await response.json();
};

// 관심 셀럽 조회
export const getInterestedCelebrities = async (): Promise<CelebrityDetail['celebrity'][]> => {
  const response = await api('/celebrities/interested');

  return await response.json();
};

// 관심 셀럽 추가
export const postInterestedCelebrity = async (celebrityId: number) => {
  await api(`/celebrities/interested/${celebrityId}`, { method: 'POST' });
};

// 관심 셀럽 삭제
export const deleteInterestedCelebrity = async (celebrityId: number) => {
  await api(`/celebrities/interested/${celebrityId}`, { method: 'DELETE' });
};
