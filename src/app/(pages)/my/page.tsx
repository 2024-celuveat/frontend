import dynamic from 'next/dynamic';

const MyPage = dynamic(() => import('./_components/MyPage'));

async function Page() {
  return <MyPage />;
}

export default Page;
