import { api } from '@/app/actions';

export async function GET() {
  const data = await api('/celebrities/interested');

  return Response.json({ data }, { status: 200 });
}
