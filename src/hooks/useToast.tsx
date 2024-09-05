import Toast from '@/components/@ui/Toast';
import { overlay } from 'overlay-kit';

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
