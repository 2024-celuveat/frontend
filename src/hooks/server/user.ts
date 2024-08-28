import { getProfile } from '@/app/actions';
import { useQuery } from '@tanstack/react-query';

export const useProfileQuery = () =>
  useQuery({
    queryKey: ['getProfile'],
    queryFn: getProfile,
  });
