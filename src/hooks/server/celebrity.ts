import { getCelebrityInfo, postInterestedCelebrity, deleteInterestedCelebrity } from '@/request';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useCelebrityInfoQuery = (celebrityId: number) =>
  useQuery({
    queryKey: ['getCelebrityInfo'],
    queryFn: () => getCelebrityInfo(celebrityId),
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
