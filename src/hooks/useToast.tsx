import { overlay } from 'overlay-kit';

import Toast from '@/components/@ui/Toast';

const useToast = () => {
  const showToast = (message: string) => {
    overlay.open(({ isOpen, close }) => (
      <Toast open={isOpen} onClose={close}>
        {message}
      </Toast>
    ));
  };

  return showToast;
};

export default useToast;
