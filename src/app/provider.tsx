'use client';

import { OverlayProvider } from 'overlay-kit';
import { PropsWithChildren } from 'react';

const Provider = ({ children }: PropsWithChildren) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default Provider;
