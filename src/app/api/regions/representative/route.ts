import { getRepresentativeRegions } from '@/remotes/regions';

export async function GET() {
  const data = await getRepresentativeRegions();
  return new Response(JSON.stringify(data), { status: 200 });
}
