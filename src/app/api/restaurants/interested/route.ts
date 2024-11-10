import { getInterestedRestaurants } from '@/remotes/restaurants';

export async function GET() {
  const data = await getInterestedRestaurants();
  return new Response(JSON.stringify(data), { status: 200 });
}
