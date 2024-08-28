import { SocialLoginType } from '@/@types/server/login.type';

export const getOAuthUrl = async (socialLoginType: SocialLoginType) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}/social-login/url/${socialLoginType}`);

  return await response.text();
};

export const getAccessToken = async (
  socialLoginType: SocialLoginType,
  authCode: string,
): Promise<{ accessToken: string }> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEW_BASE_URL}/social-login/${socialLoginType}?authCode=${authCode}`,
  );

  return await response.json();
};

export const getProfile = async () => {
  const response = await fetch('/api/user');
  return await response.json();
};
