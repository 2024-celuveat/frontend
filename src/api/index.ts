import { RestaurantData } from '@/@types';
import axios from 'axios';

export const getRestaurants = async ({ celebId }: { celebId: number }): Promise<{ content: RestaurantData[] }> => {
  const data = await axios.get(
    `/restaurants?lowLatitude=32&highLatitude=40&lowLongitude=120&highLongitude=132&sort=like&celebId=${celebId}&page=0`,
  );
  return data.data;
};
