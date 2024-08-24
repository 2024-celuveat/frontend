import { BestCelebrities } from '@/@types';
import { SocialLoginType } from '@/@types/server/login.type';
import {
  deleteInterestedCelebrity,
  deleteInterestedRestaurant,
  getAccessToken,
  getBestCelebrities,
  getCelebrityInfo,
  getInterestedCelebrities,
  getInterestedRestaurant,
  getOAuthUrl,
  postInterestedCelebrity,
  postInterestedRestaurant,
} from '@/api';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { revalidateTag } from 'next/cache';

export const useCelebrityInfoQuery = (celebrityId: number) =>
  useSuspenseQuery({
    queryKey: ['getCelebrityInfo'],
    queryFn: () => getCelebrityInfo(celebrityId),
  });

export const useBestCelebritiesQuery = ({ initialData }: { initialData: BestCelebrities[] }) =>
  useSuspenseQuery({
    queryKey: ['getBestCelebrities'],
    queryFn: getBestCelebrities,
    initialData,
    refetchInterval: 10000,
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
      revalidateTag('restaurant');
    },
  });

export const useInterestedRestaurantMutation = () => {
  return useMutation({
    mutationKey: ['getInterestedRestaurant'],
    mutationFn: postInterestedRestaurant,
  });
};

export const useDeleteInterestedRestaurantMutation = () => {
  return useMutation({
    mutationKey: ['getInterestedRestaurant'],
    mutationFn: deleteInterestedRestaurant,
  });
};

export const useInterestedRestaurantQuery = () =>
  useQuery({
    queryKey: ['getInterestedRestaurant'],
    queryFn: getInterestedRestaurant,
    staleTime: 0,
    gcTime: 0,
  });

export const useInterestedCelebritiesQuery = () =>
  useQuery({
    queryKey: ['getInterestedCelebrities'],
    queryFn: getInterestedCelebrities,
    staleTime: 0,
    gcTime: 0,
  });

export const useInterestedCelebrityMutation = () => {
  return useMutation({
    mutationKey: ['getInterestedCelebrity'],
    mutationFn: postInterestedCelebrity,
  });
};

export const useDeleteInterestedCelebrityMutation = () => {
  return useMutation({
    mutationKey: ['getInterestedCelebrity'],
    mutationFn: deleteInterestedCelebrity,
  });
};
