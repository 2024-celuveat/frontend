'use client';

import { IconArrowLeft24 } from '@/assets/icons';
import { usePathname, useRouter } from 'next/navigation';

const HeaderType1 = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <div className="relative flex h-[58px] w-full items-center justify-center">
      <IconArrowLeft24
        className="top-18 absolute left-20 h-24 w-24"
        onClick={() => {
          router.back();
        }}
      />
      <h1 className="title-20-bold">{title}</h1>
    </div>
  );
};

const HeaderType2 = ({ title }: { title: string }) => {
  return (
    <div className="flex h-[58px] items-center justify-center border-b border-[#00000014]">
      <h1 className="title-20-bold">{title}</h1>
    </div>
  );
};

const Header = () => {
  const pathname = usePathname();
  const pathValues = pathname?.split('/');

  if (!pathValues) return null;

  if (pathValues[1] === 'celebs') {
    return <HeaderType1 title={'맛집 추천 리스트'} />;
  }

  if (pathValues[1] === 'restaurant') {
    return <HeaderType1 title={'맛집 정보'} />;
  }

  if (pathValues[1] === 'my') {
    return <HeaderType2 title={'마이'} />;
  }

  if (pathValues[1] === 'interested') {
    return <HeaderType2 title={'관심'} />;
  }
};

export default Header;
