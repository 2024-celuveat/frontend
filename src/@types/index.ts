export interface Celebrity {
  id: number;
  name: string;
  profileImageUrl: string;
  introduction?: string;
  youtubeContentResults?: YoutubeContentResult[];
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

export interface YoutubeContentResult {
  id: number;
  contentsName: string;
  channelId: string;
  channelUrl: string;
  channelName: string;
  restaurantCount: number;
  subscriberCount: number;
}

export interface CelebrityDetail {
  celebrity: Celebrity;
  interested: boolean;
}
