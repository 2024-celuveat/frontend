import { SocialLoginType } from '@/@types/server/login.type';
import { getAccessToken, getOAuthUrl } from '@/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useAccessTokenQuery = (socialLoginType: SocialLoginType, authCode: string) =>
  useQuery({
    queryKey: ['getAccessToken'],
    queryFn: () => getAccessToken(socialLoginType, authCode),
  });
0;

export const useOauthUrlMutation = () =>
  useMutation({
    mutationKey: ['getOAuthUrl'],
    mutationFn: getOAuthUrl,
    onSuccess: url => {
      window.location.href = url;
    },
  });
