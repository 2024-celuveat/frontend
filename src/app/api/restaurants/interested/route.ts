import { api } from '@/app/actions';

export async function GET() {
  const data = await api('/restaurants/interested');

  return Response.json({ data }, { status: 200 });
}
