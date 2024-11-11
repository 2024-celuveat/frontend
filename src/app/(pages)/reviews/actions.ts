'use server';

import { api } from '@/utils/api';

// 손볼곳
export const updateReview = async (formData: FormData): Promise<void> => {
  await api.put(`/reviews/${formData.get('reviewId')}`, {
    restaurantId: formData.get('restaurantId'),
    content: formData.get('content'),
    star: formData.get('star'),
    images: formData.getAll('images'),
  });
};

// 리뷰 작성
export const postReview = async (formData: FormData): Promise<void> => {
  await api.post(`/reviews`, {
    restaurantId: formData.get('restaurantId'),
    content: formData.get('content'),
    star: formData.get('star'),
    images: formData.getAll('images'),
  });
};
