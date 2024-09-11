'use server';

import { redirect } from 'next/navigation';

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
  try {
    await api(`/reviews`, {
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
export const deleteReview = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/${reviewId}`, { method: 'DELETE' });
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

export const postReviewHelpful = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/helpful/${reviewId}`, { method: 'POST' });
};
export const deleteReviewHelpful = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/helpful/${reviewId}`, { method: 'DELETE' });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRestaurantReviews = async (restaurantId: number): Promise<PagedResponse<Review>> => {
  return await api(`/reviews/restaurants/${restaurantId}`);
};
