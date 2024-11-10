import { NextRequest } from 'next/server';

import { getUserProfile, updateUserProfile } from '@/remotes/members';

export async function GET() {
  const data = await getUserProfile();
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function UPDATE(request: NextRequest) {
  const body = await request.json();
  const data = await updateUserProfile(body);
  return new Response(JSON.stringify(data), { status: 200 });
}
