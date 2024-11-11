import { getReviewCount } from '@/remotes/reviews';

export async function GET(request: Request, { params }: { params: { restaurantId: string } }) {
  const { restaurantId } = params;

  const data = await getReviewCount(Number(restaurantId));
  return new Response(JSON.stringify(data), { status: 200 });
}
