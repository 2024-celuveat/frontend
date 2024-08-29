import { getOAuthUrl, postInterestedRestaurant, deleteInterestedRestaurant, getCelebrityRestaurants } from '@/request';
import { useQuery, useMutation } from '@tanstack/react-query';
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

export const useCelebrityRestaurantsQuery = (celebrityId: number) =>
  useQuery({
    queryKey: ['getCelebrityRestaurants'],
    queryFn: () => getCelebrityRestaurants(celebrityId),
  });
