export type Celeb = { id: number; name: string; profileImageUrl: string };

export interface Celebrity {
  id: number;
  name: string;
  profileImageUrl: string;
}

export interface RestaurantImage {
  name: string;
  author: string;
  url: string;
  isThumbnail: boolean;
}

export interface Restaurant {
  id: number;
  name: string;
  category: string;
  roadAddress: string;
  phoneNumber: string;
  naverMapUrl: string;
  latitude: number;
  longitude: number;
  liked: boolean;
  visitedCelebrities: Celebrity[];
  images: RestaurantImage[];
}

export interface BestCelebrities {
  celebrity: Celebrity;
  restaurants: Restaurant[];
}
