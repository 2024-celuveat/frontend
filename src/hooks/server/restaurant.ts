import {
  getOAuthUrl,
  postInterestedRestaurant,
  deleteInterestedRestaurant,
  getInterestedRestaurant,
  getCelebrityRestaurants,
} from '@/request';
import { useQuery, useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { revalidateTag } from 'next/cache';

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

export const useCelebrityRestaurantsQuery = (celebrityId: number) =>
  useQuery({
    queryKey: ['getCelebrityRestaurants'],
    queryFn: () => getCelebrityRestaurants(celebrityId),
  });
