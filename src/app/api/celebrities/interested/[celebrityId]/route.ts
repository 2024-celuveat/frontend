import { api } from '@/app/actions';

export async function POST(_: Request, { params }: { params: { celebrityId: string } }) {
  const celebrityId = params.celebrityId;
  await api(`/celebrities/interested/${celebrityId}`, { method: 'POST' });

  return Response.json({}, { status: 200 });
}

export async function DELETE(_: Request, { params }: { params: { celebrityId: string } }) {
  const celebrityId = params.celebrityId;
  await api(`/celebrities/interested/${celebrityId}`, { method: 'DELETE' });

  return Response.json({}, { status: 200 });
}
