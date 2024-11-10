import { getInterestedCelebrities } from '@/remotes/celebs';

export async function GET() {
  const data = await getInterestedCelebrities();
  return new Response(JSON.stringify(data), { status: 200 });
}
