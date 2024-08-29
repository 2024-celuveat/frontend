import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const GET = () => {
  const cookieStore = cookies();

  cookieStore.delete('accessToken');
  redirect('/');
};
