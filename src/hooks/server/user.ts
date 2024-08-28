import { getProfile } from '@/request';
import { useQuery } from '@tanstack/react-query';

export const useProfileQuery = () =>
  useQuery({
    queryKey: ['getProfile'],
    queryFn: getProfile,
  });
