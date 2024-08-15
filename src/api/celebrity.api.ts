import { BestCelebrities, CelebrityDetail } from '@/@types';

export const getBestCelebrities = async (): Promise<BestCelebrities[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/celebrities/best`);

  return await response.json();
};

export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/celebrities/${celebrityId}`);

  return await response.json();
};
