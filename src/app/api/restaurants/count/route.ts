import { getRestaurantsCount } from '@/remotes/restaurants';

export async function GET(
  request: Request,
  { searchParams }: { searchParams: Parameters<typeof getRestaurantsCount>[0] },
) {
  const data = await getRestaurantsCount(searchParams);
  return new Response(JSON.stringify(data), { status: 200 });
}
