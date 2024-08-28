import { api } from '@/app/actions';

export async function GET() {
  const response = await api('/celebrities/interested');
  const data = await response.json();

  return Response.json({ data }, { status: 200 });
}
