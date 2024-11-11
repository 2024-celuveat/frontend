import { deleteReview, getReview } from '@/remotes/reviews';

export async function GET(request: Request, { params }: { params: { reviewId: string } }) {
  const { reviewId } = params;

  const data = await getReview(Number(reviewId));
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { reviewId: string } }) {
  const { reviewId } = params;

  const data = await deleteReview(Number(reviewId));
  return new Response(JSON.stringify(data), { status: 200 });
}
