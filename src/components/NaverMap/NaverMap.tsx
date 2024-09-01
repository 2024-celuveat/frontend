'use client';

import { useEffect, useRef, useState } from 'react';

const NaverMap = () => {
  const [isReady, setIsReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsReady(true);

    if (!ref.current) return;
    if (isReady) {
      new naver.maps.Map(ref.current, {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 14,
      });
    }
  }, [isReady]);

  return <div ref={ref} className="h-[calc(100vh_-_72px)] w-full"></div>;
};

export default NaverMap;
