'use client';

import { PropsWithChildren, useEffect } from 'react';

export interface BottomSheetProps extends PropsWithChildren {
  title?: string;
  open: boolean;
  onClose: () => void;
}

function BottomSheet({ title, open, onClose, children }: BottomSheetProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    open && (
      <>
        <div
          className="absolute left-0 top-0 z-[101] h-full w-full animate-fade-in bg-[rgba(0,_0,_0,_0.5)]"
          onClick={onClose}
        />
        <div className="fixed bottom-0 right-1/2 z-[102] w-full max-w-[495px] translate-x-1/2 animate-slide-up rounded-t-[16px] bg-white px-20 pb-[34px]">
          <div className="flex h-[20px] items-center justify-center bg-white">
            <hr className="h-4 w-48 rounded-[8px] bg-gray-200" />
          </div>
          <div className="mt-16">
            {title && <h2 className="mb-24 text-center title-16-sb">{title}</h2>}
            {children}
          </div>
        </div>
      </>
    )
  );
}

export default BottomSheet;
