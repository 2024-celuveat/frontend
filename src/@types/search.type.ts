export type SearchResponse = {
  regionResults: [
    {
      id: number;
      name: string;
      latitude: number;
      longitude: number;
    },
  ];
  restaurantResults: [
    {
      id: number;
      name: string;
    },
  ];
  celebrityResults: [
    {
      id: number;
      name: string;
    },
  ];
};
