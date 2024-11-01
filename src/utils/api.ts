'use server';

export const api = async <T>(url: string, options?: Omit<RequestInit, 'body'> & { data?: unknown }): Promise<T> => {
  const headers: RequestInit['headers'] = {};

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
      ...headers,
    },
    body: JSON.stringify(options?.data),
  });

  const contentType = response.headers.get('content-type');
  if (contentType === 'application/json') return response.json();
  if (contentType === 'text') return (await response.text()) as T;
  return null as T;
};
