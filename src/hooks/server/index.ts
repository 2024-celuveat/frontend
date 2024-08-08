import { getCelebProfiles, getCelebsRestaurants } from '@/api';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const useCelebsRestaurants = (celebId: number) =>
  useSuspenseQuery({
    queryKey: ['celebsRestaurants', celebId],
    queryFn: () => getCelebsRestaurants(celebId),
  });

export const useCelebProfiles = (celebId: number) =>
  useQuery({
    queryKey: ['celebProfiles'],
    queryFn: getCelebProfiles,
    select: data => data.find(({ id }) => id === celebId),
  });
