import { postInterestedRestaurant, deleteInterestedRestaurant, getCelebrityRestaurants } from '@/request';
import { useQuery, useMutation } from '@tanstack/react-query';

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
