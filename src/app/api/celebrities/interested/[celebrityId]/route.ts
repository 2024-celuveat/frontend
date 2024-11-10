import { deleteInterestedCelebrity, postInterestedCelebrity } from '@/remotes/celebs';

export async function POST(request: Request, { params }: { params: { celebrityId: string } }) {
  const { celebrityId } = params;

  const data = await postInterestedCelebrity(Number(celebrityId));
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { celebrityId: string } }) {
  const { celebrityId } = params;

  const data = await deleteInterestedCelebrity(Number(celebrityId));
  return new Response(JSON.stringify(data), { status: 200 });
}
