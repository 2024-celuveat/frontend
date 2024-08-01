import { getRestaurants } from '@/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useCelebsRepresentativeRestaurants = (celebId: number) =>
  useSuspenseQuery({
    queryKey: ['celebsRepresentativeRestaurants', celebId],
    queryFn: () => getRestaurants({ celebId }),
  });
