import { getRestaurantVideos } from '@/remotes/restaurants';

export async function GET(request: Request, { params }: { params: { restaurantId: string } }) {
  const { restaurantId } = params;

  const data = await getRestaurantVideos(Number(restaurantId));
  return new Response(JSON.stringify(data), { status: 200 });
}
