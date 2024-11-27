'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { api } from '@/utils/api';

interface Props {
  socialLoginType: string;
  authCode: string;
}

function OAuth({ socialLoginType, authCode }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetch = async () => {
      await api.get(`/social-login/${socialLoginType}?authCode=${authCode}`);
      queryClient.clear();
      router.push('/');
    };

    fetch();
  }, []);

  return (
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2">
      <div className="h-96 w-96 rounded-full border-b-8 border-t-8 border-gray-200" />
      <div className="absolute left-0 top-0 h-96 w-96 animate-spin rounded-full border-b-8 border-t-8 border-main-700" />
    </div>
  );
}

export default OAuth;
