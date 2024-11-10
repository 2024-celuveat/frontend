import { getCelebritiesBest } from '@/remotes/restaurants';

export async function GET() {
  const data = await getCelebritiesBest();
  return new Response(JSON.stringify(data), { status: 200 });
}
