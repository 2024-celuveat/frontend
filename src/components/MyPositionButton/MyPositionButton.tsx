'use client';

import { useRouter } from 'next/navigation';

import IconLocation from '@/components/@icon/IconLocation';
import { colors } from '@/constants/colors';

function MyPositionButton() {
  const router = useRouter();

  const goToMap = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      router.push(`/map?centerX=${longitude}&centerY=${latitude}&zoom=16`);
    });
  };

  return (
    <div
      className="flex h-[64px] w-[64px] flex-none flex-col items-center justify-center gap-[3px] rounded-full bg-mainDim-15"
      onClick={goToMap}
    >
      <IconLocation fill={colors.main[700]} />
      <span className="text-main-700 body-13-rg">내 주변</span>
    </div>
  );
}

export default MyPositionButton;
