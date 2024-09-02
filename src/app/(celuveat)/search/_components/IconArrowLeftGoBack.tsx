'use client';

import IconArrowLeft from '@/components/@icon/IconArrowLeft';
import { colors } from '@/constants/colors';
import { useRouter } from 'next/navigation';

const IconArrowLeftGoBack = () => {
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
};

export default IconArrowLeftGoBack;
