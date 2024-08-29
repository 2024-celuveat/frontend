import { api } from '@/app/actions';

export async function GET() {
  const data = await api.get('/restaurants/celebrity/recommend');

  return Response.json({ data }, { status: 200 });
}
