import { postInterestedRestaurant, deleteInterestedRestaurant } from '@/remotes/restaurants';

export async function POST(request: Request, { params }: { params: { restaurantId: string } }) {
  const { restaurantId } = params;

  const data = await postInterestedRestaurant(Number(restaurantId));
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { restaurantId: string } }) {
  const { restaurantId } = params;

  const data = await deleteInterestedRestaurant(Number(restaurantId));
  return new Response(JSON.stringify(data), { status: 200 });
}
