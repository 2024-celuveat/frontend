import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = cookies();
  cookieStore.delete('accessToken');

  return Response.json({}, { status: 200 });
}
