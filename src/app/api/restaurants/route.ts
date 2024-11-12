import { NextRequest } from 'next/server';

import { getRestaurants } from '@/remotes/restaurants';

export async function GET(request: NextRequest) {
  const data = await getRestaurants(request.nextUrl.searchParams.toString());
  return new Response(JSON.stringify(data), { status: 200 });
}
