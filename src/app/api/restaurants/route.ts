import { getRestaurants } from '@/remotes/restaurants';

export async function GET(request: Request, { searchParams }: { searchParams: Parameters<typeof getRestaurants>[0] }) {
  const data = await getRestaurants(searchParams);
  return new Response(JSON.stringify(data), { status: 200 });
}
