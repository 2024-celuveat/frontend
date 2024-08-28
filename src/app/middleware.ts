import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('yes', request);
}

export const config = {
  matcher: '/api/:path*',
};
