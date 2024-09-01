'use client';

import { useEffect, useState } from 'react';

export interface BottomSheetProps {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ title, open, onClose, children }: BottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleAnimationEnd = () => {
    if (!open) {
      setIsVisible(false);
      onClose();
    }
  };

  return (
    isVisible && (
      <>
        <div
          className="absolute left-0 top-0 h-full w-full animate-fade-in bg-[rgba(0,_0,_0,_0.5)]"
          onAnimationEnd={handleAnimationEnd}
          onClick={onClose}
        />
        <div className="fixed bottom-0 right-1/2 z-[101] w-full max-w-[495px] translate-x-1/2 animate-slide-up rounded-[16px_16px_0_0] bg-white px-20 py-20">
          <h2 className="text-center title-16-sb">{title}</h2>
          <div className="mt-24">{children}</div>
        </div>
      </>
    )
  );
};

export default BottomSheet;
