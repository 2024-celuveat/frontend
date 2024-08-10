export interface RestaurantData {
  lat: number;
  lng: number;
  id: number;
  name: string;
  category: string;
  roadAddress: string;
  phoneNumber: string;
  naverMapUrl: string;
  viewCount: number;
  distance: number;
  isLiked: boolean;
  likeCount: number;
  rating: number;
  celebs: { id: number; name: string; youtubeChannelName: string; profileImageUrl: string; restaurantId: number }[];
  images: { id: number; name: string; author: string; sns: string; restaurantId: number }[];
}

export type Celeb = RestaurantData['celebs'][number];
