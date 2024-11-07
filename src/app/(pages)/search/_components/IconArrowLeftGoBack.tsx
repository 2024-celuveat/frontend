'use client';

import { useRouter } from 'next/navigation';

import IconArrowLeft from '@/components/@icon/IconArrowLeft';
import { colors } from '@/constants/colors';

function IconArrowLeftGoBack() {
  const router = useRouter();

  return (
    <IconArrowLeft
      width={24}
      height={24}
      fill={colors.gray[800]}
      onClick={() => {
        router.back();
      }}
    />
  );
}

export default IconArrowLeftGoBack;
