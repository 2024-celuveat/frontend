export type PagedResponse<T> = {
  contents: T[];
  currentPage: number;
  hasNext: boolean;
  size: number;
};

export type PageOptions = {
  page?: number;
  size?: number;
  sort?: string[];
};
