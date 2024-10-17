import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
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
