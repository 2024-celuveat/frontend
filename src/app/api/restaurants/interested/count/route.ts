import { getInterestedRestaurantsCount } from '@/remotes/restaurants';

export async function GET() {
  const data = await getInterestedRestaurantsCount();
  return new Response(JSON.stringify(data), { status: 200 });
}
