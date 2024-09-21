/* eslint-disable no-new */

'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/server/util.type';
import useQueryParams from '@/hooks/useQueryParams';

interface NaverMapProps {
  restaurants: PagedResponse<Restaurant>;
}

function NaverMap({ restaurants }: NaverMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const searchParams = useSearchParams();
  const { overrideQueryParams } = useQueryParams();

  useEffect(() => {
    if (!ref.current) return;

    const newMap = new naver.maps.Map(ref.current, {
      zoom: searchParams.get('zoom') ? Number(searchParams.get('zoom')) : 16,
      center: new naver.maps.LatLng(
        searchParams.get('centerY') ? Number(searchParams.get('centerY')) : 37.5248599,
        searchParams.get('centerX') ? Number(searchParams.get('centerX')) : 127.0399848,
      ),
    });

    const handleDrag = () => {
      const bounds = newMap.getBounds();
      const zoom = newMap.getZoom();
      const center = newMap.getCenter();

      if (!bounds) return;

      overrideQueryParams([
        ['lowLatitude', bounds.getMin().y.toString()],
        ['lowLongitude', bounds.getMin().x.toString()],
        ['highLatitude', bounds.getMax().y.toString()],
        ['highLongitude', bounds.getMax().x.toString()],
        ['zoom', zoom.toString()],
        ['centerX', center.x.toString()],
        ['centerY', center.y.toString()],
      ]);
    };

    naver.maps.Event.addListener(newMap, 'idle', handleDrag);

    setMap(newMap);
  }, []);

  useEffect(() => {
    if (!map) return;

    restaurants.contents.forEach(({ latitude, longitude, visitedCelebrities }) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map,
        icon: {
          content: /* HTML */ `<img
            src="${visitedCelebrities[0].profileImageUrl}"
            class="relative bottom-[19px] right-[19px] h-[38px] w-[38px] flex-none rounded-full border-[3px] border-white"
          />`,
        },
      });
    });
  }, [restaurants, map]);

  return <div ref={ref} className="h-[calc(100vh_-_88px)] w-full" />;
}

export default NaverMap;
