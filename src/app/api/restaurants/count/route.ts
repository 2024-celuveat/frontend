import { NextRequest } from 'next/server';

import { getRestaurantsCount } from '@/remotes/restaurants';

export async function GET(request: NextRequest) {
  const data = await getRestaurantsCount(request.nextUrl.searchParams.toString());
  return new Response(JSON.stringify(data), { status: 200 });
}
