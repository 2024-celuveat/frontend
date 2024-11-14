import { NextRequest } from 'next/server';

import { getUserProfile } from '@/remotes/members';

export async function GET(request: NextRequest) {
  //   const token = request.cookies.get('token')?.value;
  //   if (!token) {
  //     return new Response(JSON.stringify({ isMember: false }), { status: 200 });
  //   }
  //   try {
  //     await getUserProfile();
  //     return new Response(JSON.stringify({ isMember: true }), { status: 200 });
  //   } catch (error) {
  //     return new Response(JSON.stringify(error), { status: 401 });
  //   }
}
