'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { PagedResponse, PageOptions } from '@/@types/server/util.type';
import { api } from '@/utils/api';

interface Writer {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface Review {
  id: number;
  restaurantId: number;
  writer: Writer;
  content: string;
  star: 0 | 1 | 2 | 3 | 4 | 5;
  views: number;
  helps: number;
  clickedHelpful: boolean;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export const getReview = async (reviewId: number): Promise<Review> => {
  return await api(`/reviews/${reviewId}`);
};
export const updateReview = async (formData: FormData): Promise<void> => {
  const images = formData
    .getAll('images')
    .map(imgUrl => `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.amazonaws.com/${imgUrl}`);

  try {
    await api(`/reviews`, {
      method: 'PUT',
      data: {
        restaurantId: formData.get('restaurantId'),
        content: formData.get('content'),
        star: formData.get('star'),
        images,
      },
    });
  } catch (e) {
    console.log(e);
  }
  redirect(`/restaurants/restaurant/${formData.get('restaurantId')}`);
};
export const deleteReview = async (reviewId: number): Promise<void> => {
  await api(`/reviews/${reviewId}`, { method: 'DELETE' });

  revalidatePath(`/restaurants/restaurant/${reviewId}`);
};
export const postReview = async (formData: FormData): Promise<void> => {
  const images = formData
    .getAll('images')
    .map(imgUrl => `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.amazonaws.com/${imgUrl}`);

  try {
    await api(`/reviews`, {
      method: 'POST',
      data: {
        restaurantId: formData.get('restaurantId'),
        content: formData.get('content'),
        star: formData.get('star'),
        images,
      },
    });
  } catch (e) {
    console.log(e);
  }
  redirect(`/restaurants/restaurant/${formData.get('restaurantId')}`);
};

export const postReviewHelpful = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/helpful/${reviewId}`, { method: 'POST' });
};
export const deleteReviewHelpful = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/helpful/${reviewId}`, { method: 'DELETE' });
};

export const getRestaurantReviews = async (
  restaurantId: number,
  options: PageOptions = {},
): Promise<PagedResponse<Review>> => {
  const params = Object.entries(options).map(([key, value]) => [key, `${value}`]);
  const queryString = new URLSearchParams(params);

  return await api(`/reviews/restaurants/${restaurantId}?${queryString}`);
};
