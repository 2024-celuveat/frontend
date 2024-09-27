'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { PagedResponse, PageOptions } from '@/@types/util';
import { TAGS } from '@/constants/tags';
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
  return await api(`/reviews/${reviewId}`, {
    next: { tags: [TAGS.TYPE.REVIEW] },
  });
};

export const updateReview = async (formData: FormData): Promise<void> => {
  try {
    await api(`/reviews/${formData.get('reviewId')}`, {
      method: 'PUT',
      data: {
        restaurantId: formData.get('restaurantId'),
        content: formData.get('content'),
        star: formData.get('star'),
        images: formData.getAll('images'),
      },
    });
  } catch (e) {
    console.log(e);
  }
  redirect(`/restaurants/restaurant/${formData.get('restaurantId')}`);
};

export const postReview = async (formData: FormData): Promise<void> => {
  try {
    await api(`/reviews`, {
      method: 'POST',
      data: {
        restaurantId: formData.get('restaurantId'),
        content: formData.get('content'),
        star: formData.get('star'),
        images: formData.getAll('images'),
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

export const postReviewHelpful = async (reviewId: number): Promise<void> => {
  await api(`/reviews/helpful/${reviewId}`, { method: 'POST' });

  revalidateTag(TAGS.TYPE.REVIEW);
};
export const deleteReviewHelpful = async (reviewId: number): Promise<void> => {
  await api(`/reviews/helpful/${reviewId}`, { method: 'DELETE' });

  revalidateTag(TAGS.TYPE.REVIEW);
};

export const getRestaurantReviews = async (
  restaurantId: number,
  options: PageOptions = {},
): Promise<PagedResponse<Review>> => {
  const params = Object.entries(options).map(([key, value]) => [key, `${value}`]);
  const queryString = new URLSearchParams(params);

  return await api(`/reviews/restaurants/${restaurantId}?${queryString}`, {
    next: { tags: [TAGS.TYPE.REVIEW] },
  });
};

export const getReviewCount = async (restaurantId: number): Promise<number> => {
  return await api(`/reviews/restaurants/${restaurantId}/count`, {
    next: { tags: [TAGS.TYPE.REVIEW] },
  });
};
