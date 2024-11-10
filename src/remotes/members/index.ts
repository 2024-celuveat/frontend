import { UserProfile } from '@/@types';
import { api } from '@/utils/api';

// 유저 프로필 조회
export const getUserProfile = async (): Promise<UserProfile> => {
  return await api.get('/members/profile');
};

// 유저 프로필 수정
export const updateUserProfile = async (data: { nickname: string; profileImageUrl: string }) => {
  return await api.patch('/members/profile', data);
};
