import { SocialLoginType } from '@/@types/server/login.type';

export const getOAuthUrl = async (socialLoginType: SocialLoginType) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/social-login/url/${socialLoginType}`);

  return await response.text();
};

export const getProfile = async () => {
  const response = await fetch('/api/user');
  return await response.json();
};
