import { getWeeklyRestaurantsCount } from '@/remotes/restaurants';

export async function GET() {
  const data = await getWeeklyRestaurantsCount();
  return new Response(JSON.stringify(data), { status: 200 });
}
