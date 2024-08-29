type PagedResponse<T> = {
  contents: T[];
  currentPage: number;
  hasNext: boolean;
  size: number;
};
