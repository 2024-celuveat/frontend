/* eslint-disable no-new */

'use client';

import { useEffect, useRef } from 'react';

import { Restaurant } from '@/@types';

interface NaverMapProps {
  restaurants: PagedResponse<Restaurant>;
}

function NaverMap({ restaurants }: NaverMapProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new naver.maps.Map(ref.current, {
      center: new naver.maps.LatLng(37.5364056, 127.122222),
      zoom: 12,
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
  }, []);

  return <div ref={ref} className="h-[calc(100vh_-_88px)] w-full" />;
}

export default NaverMap;
