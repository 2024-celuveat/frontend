'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { OverlayProvider } from 'overlay-kit';
import { PropsWithChildren, Suspense, useState } from 'react';

function Provider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60, // 1분
            retry: 2,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <Suspense fallback={<p>Loading...</p>}>
          <OverlayProvider>{children}</OverlayProvider>
        </Suspense>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}

export default Provider;
