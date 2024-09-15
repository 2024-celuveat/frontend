/* eslint-disable no-new */

'use client';

import { useEffect, useRef } from 'react';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/server/util.type';
import useQueryParams from '@/hooks/useQueryParams';

interface NaverMapProps {
  mapOptions: naver.maps.MapOptions;
  restaurants: PagedResponse<Restaurant>;
}

function NaverMap({ restaurants, mapOptions }: NaverMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { overrideQueryParams } = useQueryParams();

  useEffect(() => {
    if (!ref.current) return;

    const map = new naver.maps.Map(ref.current, mapOptions);

    restaurants.contents.forEach(({ latitude, longitude, visitedCelebrities }) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map,
        icon: {
          content: /* HTML */ `<img
            src="${visitedCelebrities[0].profileImageUrl}"
            class="h-[38px] w-[38px] flex-none rounded-full border-[3px] border-white"
          />`,
        },
      });
    });

    naver.maps.Event.addListener(map, 'idle', () => {
      const bounds = map.getBounds();
      overrideQueryParams([
        ['lowLatitude', bounds.getMin().y.toString()],
        ['lowLongitude', bounds.getMin().x.toString()],
        ['highLatitude', bounds.getMax().y.toString()],
        ['highLongitude', bounds.getMax().x.toString()],
      ]);
    });
  }, []);

  return <div ref={ref} className="h-[calc(100vh_-_88px)] w-full" />;
}

export default NaverMap;
