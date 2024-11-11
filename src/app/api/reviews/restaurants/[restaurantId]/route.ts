import { getRestaurantReviews } from '@/remotes/reviews';

export async function GET(request: Request, { params }: { params: { restaurantId: string } }) {
  const { restaurantId } = params;

  const data = await getRestaurantReviews(Number(restaurantId));
  return new Response(JSON.stringify(data), { status: 200 });
}
