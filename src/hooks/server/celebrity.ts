import {
  getCelebrityInfo,
  getBestCelebrities,
  getInterestedCelebrities,
  postInterestedCelebrity,
  deleteInterestedCelebrity,
} from '@/request';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const useCelebrityInfoQuery = (celebrityId: number) =>
  useSuspenseQuery({
    queryKey: ['getCelebrityInfo'],
    queryFn: () => getCelebrityInfo(celebrityId),
  });

export const useBestCelebritiesQuery = () =>
  useSuspenseQuery({
    queryKey: ['getBestCelebrities'],
    queryFn: getBestCelebrities,
    staleTime: 0,
  });

export const useInterestedCelebritiesQuery = () =>
  useSuspenseQuery({
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
