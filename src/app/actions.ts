'use server';

import { cookies } from 'next/headers';

export const api = async (path: string, options?: RequestInit) => {
  const headers: RequestInit['headers'] = {};

  if (cookies().has('accessToken')) {
    headers['Authorization'] = `Bearer ${cookies().get('accessToken')?.value}`;
  }

  return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${path}`, {
    headers,
    ...options,
  });
};
