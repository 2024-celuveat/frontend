'use server';

import { revalidateTag } from 'next/cache';

import { Celebrity, CelebrityDetail } from '@/@types';
import { CoordinateOption, FilterOption } from '@/@types/util';
import { TAGS } from '@/constants/tags';
import { api } from '@/utils/api';

// 셀럽 정보 조회
export const getCelebrityInfo = async (celebrityId: number): Promise<CelebrityDetail> => {
  return api(`/celebrities/${celebrityId}`, { next: { tags: [TAGS.TYPE.CELEBRITY] } });
};

// 관심 셀럽 추가
export const postInterestedCelebrity = async (celebrityId: number) => {
  await api(`/celebrities/interested/${celebrityId}`, { method: 'POST' });

  revalidateTag(TAGS.TYPE.CELEBRITY);
};

// 관심 셀럽 삭제
export const deleteInterestedCelebrity = async (celebrityId: number) => {
  await api(`/celebrities/interested/${celebrityId}`, { method: 'DELETE' });

  revalidateTag(TAGS.TYPE.CELEBRITY);
};

// 관심 셀럽 조회
export const getInterestedCelebrities = async (): Promise<CelebrityDetail['celebrity'][]> => {
  return await api('/celebrities/interested', { next: { tags: [TAGS.TYPE.CELEBRITY] } });
};

// 필터용 셀럽 조회
export const getCelebritiesInRestaurants = async (
  options: FilterOption & (CoordinateOption | {}),
): Promise<Pick<Celebrity, 'id' | 'name' | 'profileImageUrl'>[]> => {
  const params = Object.entries(options).map(([key, value]) => [key, `${value}`]);
  return await api(`/celebrities/in/restaurants/condition${new URLSearchParams(params)}`, { next: { tags: [] } });
};
