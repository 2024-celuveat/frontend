import { BestCelebrities, CelebrityDetail } from '@/@types';
import { api } from '@/utils/api';

export const getBestCelebrities = async (): Promise<BestCelebrities[]> => {
  const response = await api(`/celebrities/best`);

  return await response.json();
};

export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  const response = await api(`/celebrities/${celebrityId}`);

  return await response.json();
};
