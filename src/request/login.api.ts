import { SocialLoginType } from '@/@types/server/login.type';
import { apiClient } from './instance';

export const getOAuthUrl = async (socialLoginType: SocialLoginType): Promise<string> => {
  return await apiClient(`/api/social-login/url/${socialLoginType}`);
};

export const getProfile = async (): Promise<boolean> => {
  return await apiClient('/api/user');
};

export const postLogout = async () => {
  await apiClient('/api/social-login/logout', { method: 'POST' });
};
