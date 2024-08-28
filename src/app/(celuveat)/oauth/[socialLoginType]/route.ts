import { SocialLoginType } from '@/@types/server/login.type';
import { api } from '@/app/actions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { socialLoginType: SocialLoginType } }) {
  const socialLoginType = params.socialLoginType;
  const searchParams = request.nextUrl.searchParams;
  const authCode = searchParams.get('code');

  if (!authCode) return;

  const response = await api(`/social-login/${socialLoginType}?authCode=${authCode}`, {
    headers: {
      origin: request.nextUrl.origin,
    },
  });
  const { accessToken } = await response.json();

  cookies().set({
    name: 'accessToken',
    value: accessToken,
  });
  redirect('/');
}
