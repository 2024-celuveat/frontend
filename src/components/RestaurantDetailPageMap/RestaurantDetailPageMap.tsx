'use client';

import { Restaurant } from '@/@types';
import { useRef, useEffect } from 'react';

const RestaurantDetailPageMap = ({ latitude, longitude, images }: Restaurant) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new naver.maps.Map(ref.current, {
      center: new naver.maps.LatLng(latitude + 0.0004, longitude),
      zoom: 16,
    });

    if (images.length > 0) {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map,
        icon: {
          content: /* HTML */ `
            <div class="relative">
              <img
                src="${images[0].url}"
                class="after:ballon2 ballon2-shadow h-[80px] w-[80px] rounded-full outline outline-[4px] outline-white"
              />
              <div class="ballon2 ballon2-shadow"></div>
            </div>
          `,
          size: new naver.maps.Size(80, 80),
        },
      });
    }

    new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map,
    });
  }, []);

  return <div ref={ref} className="h-[240px] w-full" />;
};

export default RestaurantDetailPageMap;
