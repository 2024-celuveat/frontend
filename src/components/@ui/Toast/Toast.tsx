/* eslint-disable consistent-return */
import { PropsWithChildren, useEffect } from 'react';

interface ToastProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

function Toast({ open, onClose, children }: ToastProps) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return open ? (
    <div className="fixed bottom-[100px] left-1/2 -translate-x-1/2 animate-toast text-nowrap rounded-[8px] bg-dim-85 px-32 py-16 text-white body-14-rg">
      {children}
    </div>
  ) : null;
}

export default Toast;
