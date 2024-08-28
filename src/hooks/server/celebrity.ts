import {
  getCelebrityInfo,
  getBestCelebrities,
  getInterestedCelebrities,
  postInterestedCelebrity,
  deleteInterestedCelebrity,
} from '@/request';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useCelebrityInfoQuery = (celebrityId: number) =>
  useQuery({
    queryKey: ['getCelebrityInfo'],
    queryFn: () => getCelebrityInfo(celebrityId),
  });

export const useBestCelebritiesQuery = () =>
  useQuery({
    queryKey: ['getBestCelebrities'],
    queryFn: getBestCelebrities,
    staleTime: 0,
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
