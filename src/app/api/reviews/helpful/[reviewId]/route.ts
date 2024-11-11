import { deleteReviewHelpful, postReviewHelpful } from '@/remotes/reviews';

export async function POST(request: Request, { params }: { params: { reviewId: string } }) {
  const { reviewId } = params;

  const data = await postReviewHelpful(Number(reviewId));
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { reviewId: string } }) {
  const { reviewId } = params;

  const data = await deleteReviewHelpful(Number(reviewId));
  return new Response(JSON.stringify(data), { status: 200 });
}
