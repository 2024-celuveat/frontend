'use client';

import { SocialLoginType } from '@/@types/server/login.type';
import { useAccessTokenQuery } from '@/hooks/server';
import { useSearchParams } from 'next/navigation';

const OAuthRedirectPage = ({ params }: { params: { socialLoginType: SocialLoginType } }) => {
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code');
  const { isSuccess, data } = useAccessTokenQuery(params.socialLoginType, authCode as string);

  if (isSuccess) {
    localStorage.setItem('accessToken', data.accessToken);

    window.location.href = '/';
  }

  return null;
};

export default OAuthRedirectPage;
