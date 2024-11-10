import { getRecommendedRestaurantsByCelebrities } from '@/remotes/restaurants';

export async function GET() {
  const data = await getRecommendedRestaurantsByCelebrities();
  return new Response(JSON.stringify(data), { status: 200 });
}
