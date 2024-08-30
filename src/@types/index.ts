export interface Celebrity {
  id: number;
  name: string;
  profileImageUrl: string;
  subscriberCount: number;
  restaurantCount: number;
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
  businessHours: string;
  introduction: string;
  naverMapUrl: string;
  latitude: number;
  longitude: number;
  images: RestaurantImage[];
  liked: boolean;
  visitedCelebrities: Celebrity[];
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
  celebrity: Celebrity & { introduction: string; youtubeContentResults: YoutubeContentResult[] };
  interested: boolean;
}

export interface Video {
  id: number;
  videoUrl: string;
  celebrities: Celebrity[];
}
