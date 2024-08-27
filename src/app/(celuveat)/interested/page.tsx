import dynamic from 'next/dynamic';

const InterestedPageLazy = dynamic(() => import('@/pages/InterestedPageLazy'), { ssr: false });

const InterestedPage = () => {
  return <InterestedPageLazy />;
};

export default InterestedPage;
