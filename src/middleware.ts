import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.cookies.has('accessToken')) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/members/profile`, {
      headers: {
        Authorization: `Bearer ${request.cookies.get('accessToken')?.value}`,
      },
    });

    if (response.status === 401) {
      const nextResponse = NextResponse.next();
      nextResponse.cookies.delete('accessToken');
      return nextResponse;
    }
  }

  const headers = new Headers(request.headers);
  headers.set('Set-Cookie', request.cookies.get('accessToken')?.value ?? '');

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: ['/celebs/:path*', '/interested/:path*', '/map/:path*', '/my/:path*', '/restaurants/:path*', '/'],
};
