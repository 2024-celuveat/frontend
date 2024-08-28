import { postLogout } from '@/request';
import { useMutation } from '@tanstack/react-query';

export const useLogoutMutation = () =>
  useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      window.location.href = '/';
    },
  });
