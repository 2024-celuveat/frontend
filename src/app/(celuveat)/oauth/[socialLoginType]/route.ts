import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

import { SocialLoginType } from '@/@types';
import { api } from '@/utils/api';

export async function GET(request: NextRequest, { params }: { params: { socialLoginType: SocialLoginType } }) {
  const { socialLoginType } = params;
  const { searchParams } = request.nextUrl;
  const authCode = searchParams.get('code');

  if (!authCode) return;

  const { accessToken } = await api<{ accessToken: string }>(`/social-login/${socialLoginType}?authCode=${authCode}`, {
    headers: {
      origin: request.nextUrl.origin,
    },
  });

  cookies().set({
    name: 'accessToken',
    value: accessToken,
  });
  redirect('/');
}
