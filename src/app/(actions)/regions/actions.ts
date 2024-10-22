'use server';

import { api } from '@/utils/api';

// 대표 지역 조회
export const getRepresentativeRegions = async (): Promise<{ name: string; imageUrl: string }[]> => {
  return await api('/regions/representative');
};
