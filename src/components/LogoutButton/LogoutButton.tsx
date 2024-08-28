'use client';

import { useLogoutMutation } from '@/hooks/server';
import { useCallback } from 'react';

const LogoutButton = () => {
  const { mutate } = useLogoutMutation();

  const handleClickLogout = useCallback(() => {
    mutate();
  }, []);

  return (
    <button
      className="flex h-[50px] w-full items-center justify-center rounded-[8px] bg-gray-100 text-gray-700 body-16-md"
      onClick={handleClickLogout}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
