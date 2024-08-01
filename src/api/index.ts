import { Celeb, RestaurantData } from '@/@types';
import axios from 'axios';

export const getRestaurants = async ({ celebId }: { celebId: number }): Promise<{ content: RestaurantData[] }> => {
  const response = await axios.get(
    `/api/restaurants?lowLatitude=32&highLatitude=40&lowLongitude=120&highLongitude=132&sort=like&celebId=${celebId}&page=0`,
  );
  return response.data;
};

export const getCelebProfiles = async (): Promise<Celeb[]> => {
  const response = await axios.get(`/api/celebs`);
  return response.data;
};
