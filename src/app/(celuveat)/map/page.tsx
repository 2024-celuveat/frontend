import { getRestaurants } from '@/app/(actions)/restaurants/actions';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const NaverMap = dynamic(() => import('@/components/NaverMap'));

const MapPage = async () => {
  const restaurants = await getRestaurants({
    region: '서울',
    category: '한식',
    lowLatitude: 29.085082344179696,
    lowLongitude: 124.19130906495111,
    highLatitude: 40.580676585499354,
    highLongitude: 131.56313523682613,
    page: 0,
    size: 100,
    sort: [],
  });
  return (
    <div>
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY_ID}`}
      ></Script>
      <NaverMap restaurants={restaurants} />
    </div>
  );
};

export default MapPage;
