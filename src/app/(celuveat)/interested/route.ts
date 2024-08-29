import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const GET = () => {
  const cookieStore = cookies();

  if (cookieStore.has('accessToken')) {
    redirect('/interested/restaurants');
  }

  redirect('/'); //로그인 페이지 나오면 이동시켜주기
};
