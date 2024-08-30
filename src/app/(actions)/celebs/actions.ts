import { CelebrityDetail } from '@/@types';
import { api } from '@/utils/api';

// 셀럽 정보 조회
export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  return api(`/celebrities/${celebrityId}`);
};

// 관심 셀럽 추가
export const postInterestedCelebrity = async (celebrityId: number) => {
  await api(`/celebrities/interested/${celebrityId}`, { method: 'POST' });
};

// 관심 셀럽 삭제
export const deleteInterestedCelebrity = async (celebrityId: number) => {
  await api(`/celebrities/interested/${celebrityId}`, { method: 'DELETE' });
};

// 관심 셀럽 조회
export const getInterestedCelebrities = async (): Promise<CelebrityDetail['celebrity'][]> => {
  return await api('/celebrities/interested');
};
