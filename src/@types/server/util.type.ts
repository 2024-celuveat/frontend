// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PagedResponse<T> = {
  contents: T[];
  currentPage: number;
  hasNext: boolean;
  size: number;
};
