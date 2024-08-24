import { SocialLoginType } from '@/@types/server/login.type';
import { api } from '@/utils/api';

export const getOAuthUrl = async (socialLoginType: SocialLoginType) => {
  const response = await api(`/social-login/url/${socialLoginType}`);

  return await response.text();
};

export const getAccessToken = async (
  socialLoginType: SocialLoginType,
  authCode: string,
): Promise<{ accessToken: string }> => {
  const response = await api(`/social-login/${socialLoginType}?authCode=${authCode}`);

  return await response.json();
};
