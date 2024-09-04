'use client';

import { usePathname, useRouter } from 'next/navigation';
import IconArrowLeft from '../@icon/IconArrowLeft';

const HeaderType1 = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <div className="relative flex h-[58px] w-full items-center justify-center">
      <IconArrowLeft
        className="top-18 absolute left-20"
        onClick={() => {
          router.back();
        }}
        width={24}
        height={24}
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
  console.log(pathValues);

  if (!pathValues) return null;

  if (pathValues[1] === 'celebs') {
    return <HeaderType1 title={'맛집 추천 리스트'} />;
  }

  if (pathValues[1] === 'my') {
    return <HeaderType2 title={'마이'} />;
  }

  if (pathValues[1] === 'interested') {
    return <HeaderType2 title={'관심'} />;
  }

  if (pathValues[1] === 'restaurants') {
    if (pathValues[2] === 'restaurant') return <HeaderType1 title={'맛집 정보'} />;
    if (pathValues[2] === 'category') return <HeaderType1 title={decodeURIComponent(pathValues[3])} />;
    if (pathValues[2] === 'weekly') return <HeaderType1 title={'이번 주 업데이트 된 맛집'} />;
  }
};

export default Header;
