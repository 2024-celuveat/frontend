import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  cookies().set('accessToken', request.headers.get('Cookie') ?? '');
  return new Response(null, { status: 200 });
}
