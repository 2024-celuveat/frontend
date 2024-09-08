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
export const updateReview = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/${reviewId}`, { method: 'PUT' });
};
export const deleteReview = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/${reviewId}`, { method: 'DELETE' });
};
export const postReview = async (): Promise<void> => {
  return await api(`/reviews`, { method: 'POST' });
};

export const postReviewHelpful = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/helpful/${reviewId}`, { method: 'POST' });
};
export const deleteReviewHelpful = async (reviewId: number): Promise<void> => {
  return await api(`/reviews/helpful/${reviewId}`, { method: 'DELETE' });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRestaurantReviews = async (restaurantId: number): Promise<PagedResponse<Review>> => {
  // return await api(`/reviews/restaurants/${restaurantId}`);
  return {
    contents: [
      {
        id: 1,
        restaurantId: 101,
        writer: {
          id: 1,
          nickname: 'Alice',
          profileImageUrl: 'https://avatars.githubusercontent.com/u/124599?v=4',
        },
        content: 'Great food and wonderful atmosphere! Will definitely come back.',
        star: 5,
        views: 150,
        helps: 10,
        clickedHelpful: true,
        images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
        createdAt: '2024-09-01T12:00:00Z',
        updatedAt: '2024-09-02T15:00:00Z',
      },
      {
        id: 2,
        restaurantId: 102,
        writer: {
          id: 2,
          nickname: 'Bob',
          profileImageUrl: 'https://avatars.githubusercontent.com/u/124599?v=4',
        },
        content: 'The service was a bit slow, but the food was good.',
        star: 3,
        views: 75,
        helps: 5,
        clickedHelpful: false,
        images: ['https://example.com/image3.jpg'],
        createdAt: '2024-09-02T14:30:00Z',
        updatedAt: '2024-09-03T09:00:00Z',
      },
      // Add more reviews as needed
    ],
    currentPage: 1,
    hasNext: true,
    size: 10,
  };
};
