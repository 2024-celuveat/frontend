'use server';

import { cookies } from 'next/headers';

export const getIsLogin = async () => {
  const cookieStore = cookies();
  if (cookieStore.has('accessToken')) {
    return true;
  }
  return false;
};
