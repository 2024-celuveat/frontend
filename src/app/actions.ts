'use server';

import { cookies } from 'next/headers';

export const api = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const headers: RequestInit['headers'] = {};
  if (cookies().has('accessToken')) {
    headers['Authorization'] = `Bearer ${cookies().get('accessToken')?.value}`;
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${url}`, {
    ...options,
    headers: { ...options?.headers, ...headers },
  });
  if (!response) return {} as T;
  return await response.json();
};
