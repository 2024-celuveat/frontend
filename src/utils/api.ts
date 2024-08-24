export const api = async (path: string, options?: RequestInit) => {
  const headers: RequestInit['headers'] = {};

  if (typeof window !== 'undefined') {
    headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
  }

  return await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}${path}`, {
    headers,
    ...options,
  });
};
