// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (token) {
    // Authorization 헤더에 토큰을 추가하여 백엔드 서버로 요청 전달
    request.headers.set('Authorization', `Bearer ${token}`);
  }

  return NextResponse.next();
}

// 특정 경로에 대해 middleware를 적용
export const config = {
  matcher: ['/api/:path*'], // 예: /api/ 경로의 모든 요청에 적용
};
