'use server';

import { cookies } from 'next/headers';

export const api = async (path: string, options?: RequestInit) => {
  return await fetch(`${process.env.NEXT_PUBLIC_NEW_BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
    },
    ...options,
  });
};
