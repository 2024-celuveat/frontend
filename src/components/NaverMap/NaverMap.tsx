'use client';

import { Restaurant } from '@/@types';
import { useEffect, useRef, useState } from 'react';

interface NaverMapProps {
  restaurants: PagedResponse<Restaurant>;
}

const NaverMap = ({ restaurants }: NaverMapProps) => {
  const [isReady, setIsReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsReady(true);

    if (!ref.current) return;
    if (isReady) {
      const map = new naver.maps.Map(ref.current, {
        center: new naver.maps.LatLng(37.5664056, 126.9778222),
        zoom: 13,
      });

      restaurants.contents.forEach(({ latitude, longitude, visitedCelebrities }) => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map,
          icon: {
            content: /* HTML */ `<img
              src="${visitedCelebrities[0].profileImageUrl}"
              class="h-[38px] w-[38px] rounded-full border-[3px] border-white"
            />`,
          },
        });
      });
    }
  }, [isReady]);

  return <div ref={ref} className="h-[calc(100vh_-_72px)] w-full"></div>;
};

export default NaverMap;
