import { getCelebrityInfo } from '@/remotes/celebs';

export async function GET(request: Request, { params }: { params: { celebrityId: string } }) {
  const { celebrityId } = params;

  const data = await getCelebrityInfo(Number(celebrityId));
  return new Response(JSON.stringify(data), { status: 200 });
}
