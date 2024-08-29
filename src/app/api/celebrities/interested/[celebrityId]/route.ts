import { api } from '@/app/actions';

export async function POST(_: Request, { params }: { params: { celebrityId: string } }) {
  const celebrityId = params.celebrityId;
  await api.post(`/celebrities/interested/${celebrityId}`);

  return Response.json({}, { status: 200 });
}

export async function DELETE(_: Request, { params }: { params: { celebrityId: string } }) {
  const celebrityId = params.celebrityId;
  await api.post(`/celebrities/interested/${celebrityId}`);

  return Response.json({}, { status: 200 });
}
