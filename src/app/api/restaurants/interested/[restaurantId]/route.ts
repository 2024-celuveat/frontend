import { api } from '@/app/actions';

export async function POST(_: Request, { params }: { params: { restaurantId: string } }) {
  const restaurantId = params.restaurantId;
  await api(`/restaurants/interested/${restaurantId}`);

  return Response.json({}, { status: 200 });
}

export async function DELETE(_: Request, { params }: { params: { restaurantId: string } }) {
  const restaurantId = params.restaurantId;
  await api(`/restaurants/interested/${restaurantId}`);

  return Response.json({}, { status: 200 });
}
