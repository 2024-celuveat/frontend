export const api = async (path: string, options?: RequestInit) => {
  return await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}${path}`, options);
};

export const apiClient = async (path: string, options?: RequestInit) => {
  const headers: RequestInit['headers'] = {};
  const token = localStorage.getItem('accessToken');

  if (token) {
    headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
  }

  return await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}${path}`, {
    headers,
    ...options,
  });
};
