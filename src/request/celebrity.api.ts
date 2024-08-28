import { BestCelebrities, CelebrityDetail } from '@/@types';

// 인기 셀럽 조회
export const getBestCelebrities = async (): Promise<BestCelebrities[]> => {
  const response = await fetch('/api/celebrities/best');
  const { data } = await response.json();
  return data;
};

// 셀럽 정보 조회
export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  const response = await fetch(`/api/celebrities/${celebrityId}`);
  const { data } = await response.json();
  return data;
};

// 관심 셀럽 조회
export const getInterestedCelebrities = async (): Promise<CelebrityDetail['celebrity'][]> => {
  const response = await fetch('/api/celebrities/interested');
  const { data } = await response.json();
  return data;
};

// 관심 셀럽 추가
export const postInterestedCelebrity = async (celebrityId: number) => {
  await fetch(`/api/celebrities/interested/${celebrityId}`, { method: 'POST' });
};

// 관심 셀럽 삭제
export const deleteInterestedCelebrity = async (celebrityId: number) => {
  await fetch(`/api/celebrities/interested/${celebrityId}`, { method: 'DELETE' });
};
