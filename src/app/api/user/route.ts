import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();

  if (cookieStore.has('accessToken')) {
    return Response.json({ data: true }, { status: 200 });
  }
  return Response.json({ data: false }, { status: 200 });
}
