import dynamic from 'next/dynamic';
import Script from 'next/script';

const NaverMap = dynamic(() => import('@/components/NaverMap'));

const MapPage = () => {
  return (
    <div>
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY_ID}`}
      ></Script>
      <NaverMap />
    </div>
  );
};

export default MapPage;
