import { api } from '@/app/actions';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { socialLoginType: string } }) {
  const socialLoginType = params.socialLoginType;
  const response = await api(`/social-login/url/${socialLoginType}`, {
    headers: {
      origin: request.nextUrl.origin,
    },
  });
  const url = await response.text();
  return Response.json({ data: url });
}
