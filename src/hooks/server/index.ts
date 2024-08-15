import { SocialLoginType } from '@/@types/server/login.type';
import { getAccessToken, getCelebrityInfo, getOAuthUrl } from '@/api';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const useCelebrityInfoQuery = (celebrityId: number) =>
  useSuspenseQuery({
    queryKey: ['getCelebrityInfo'],
    queryFn: () => getCelebrityInfo(celebrityId),
  });

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
