import { SocialLoginType } from '@/@types/server/login.type';
import { getAccessToken, getCelebProfiles, getCelebsRestaurants, getOAuthUrl } from '@/api';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const useCelebsRestaurants = (celebId: number) =>
  useSuspenseQuery({
    queryKey: ['celebsRestaurants', celebId],
    queryFn: () => getCelebsRestaurants(celebId),
  });

export const useCelebProfiles = (celebId: number) =>
  useQuery({
    queryKey: ['celebProfiles'],
    queryFn: getCelebProfiles,
    select: data => data.find(({ id }) => id === celebId),
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
