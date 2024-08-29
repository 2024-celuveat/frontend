import { api } from '@/app/actions';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { socialLoginType: string } }) {
  const socialLoginType = params.socialLoginType;
  const url = await api.get(`/social-login/url/${socialLoginType}`, {
    headers: {
      origin: request.nextUrl.origin,
    },
  });
  return Response.json({ data: url });
}
