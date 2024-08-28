import { getProfile } from '@/request';
import { useQuery } from '@tanstack/react-query';

export const useProfileQuery = () =>
  useQuery({
    queryKey: ['getProfile'],
    queryFn: getProfile,
    retry: false,
    staleTime: 0,
    gcTime: 0,
  });
