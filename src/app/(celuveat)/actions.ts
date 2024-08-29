import { BestCelebrities } from '@/@types';
import { api } from '@/app/actions';

export const getCelebritiesBest = async (): Promise<BestCelebrities[]> => {
  return await api.get('/celebrities/best');
};
