import { SocialLoginType } from '@/@types/server/login.type';
import {
  getAccessToken,
  getOAuthUrl,
  postInterestedRestaurant,
  deleteInterestedRestaurant,
  getInterestedRestaurant,
  getRecommendedRestaurantsByCelebrities,
  getCelebrityRestaurants,
} from '@/app/actions';
import { useSuspenseQuery, useMutation } from '@tanstack/react-query';
import { revalidateTag } from 'next/cache';

export const useAccessTokenQuery = (socialLoginType: SocialLoginType, authCode: string) =>
  useSuspenseQuery({
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
  useSuspenseQuery({
    queryKey: ['getInterestedRestaurant'],
    queryFn: getInterestedRestaurant,
    staleTime: 0,
    gcTime: 0,
  });

export const useRecommendedRestaurantsByCelebritiesQuery = () =>
  useSuspenseQuery({
    queryKey: ['getRecommendedRestaurantsByCelebrities'],
    queryFn: getRecommendedRestaurantsByCelebrities,
  });

export const useCelebrityRestaurantsQuery = (celebrityId: number) =>
  useSuspenseQuery({
    queryKey: ['getCelebrityRestaurants'],
    queryFn: () => getCelebrityRestaurants(celebrityId),
  });
