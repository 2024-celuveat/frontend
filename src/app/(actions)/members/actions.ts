'use server';

import { UserProfile } from '@/@types';
import { api } from '@/utils/api';

export const getUserProfile = async (): Promise<UserProfile> => {
  return await api('/members/profile');
};

export const updateUserProfile = async (data: { nickname: string; profileImageUrl: string }) => {
  return await api('/members/profile', { method: 'PATCH', data });
};
