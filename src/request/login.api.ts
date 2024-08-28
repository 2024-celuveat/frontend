import { SocialLoginType } from '@/@types/server/login.type';

export const getOAuthUrl = async (socialLoginType: SocialLoginType): Promise<string> => {
  const response = await fetch(`/api/social-login/url/${socialLoginType}`);
  const { data } = await response.json();
  return data;
};

export const getProfile = async (): Promise<boolean> => {
  const response = await fetch('/api/user');
  const { data } = await response.json();
  return data;
};

export const postLogout = async () => {
  await fetch('/api/social-login/logout', { method: 'POST' });
};
