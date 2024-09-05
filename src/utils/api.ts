'use server';

import { cookies } from 'next/headers';

export const api = async <T>(url: string, options?: Omit<RequestInit, 'body'> & { data?: unknown }): Promise<T> => {
  const headers: RequestInit['headers'] = {};
  if (cookies().has('accessToken')) {
    headers['Authorization'] = `Bearer ${cookies().get('accessToken')?.value}`;
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${url}`, {
    ...options,
    headers: { ...options?.headers, ...headers },
    body: JSON.stringify(options?.data),
  });

  if (!response.ok) throw response;

  const contentType = response.headers.get('content-type');
  if (contentType === 'application/json') return await response.json();
  if (contentType === 'text') return (await response.text()) as T;
  return null as T;
};
