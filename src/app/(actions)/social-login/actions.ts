'use server';

import { cookies } from 'next/headers';

import { SocialLoginType } from '@/@types/server/login.type';
import { api } from '@/utils/api';

export const getIsLogin = async () => {
  const cookieStore = cookies();
  if (cookieStore.has('accessToken')) {
    return true;
  }
  return false;
};

export const deleteAccount = async (socialLoginType: SocialLoginType): Promise<void> => {
  return await api(`/social-login/withdraw/${socialLoginType}`, { method: 'DELETE' });
};
