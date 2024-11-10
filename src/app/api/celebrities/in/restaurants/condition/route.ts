import { CoordinateOption, FilterOption } from '@/@types/util';
import { getCelebritiesInRestaurants } from '@/remotes/celebs';

export async function GET(
  request: Request,
  { searchParams }: { searchParams: FilterOption & (CoordinateOption | {}) },
) {
  const data = await getCelebritiesInRestaurants(searchParams);
  return new Response(JSON.stringify(data), { status: 200 });
}
