export const apiClient = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, options);
  const { data } = await response.json();
  return data;
};
