'use client';

import { IconArrowLeft } from '@/assets/icons';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <div className="relative flex h-[58px] w-full items-center justify-center">
      <IconArrowLeft
        className="top-18 absolute left-20 h-24 w-24"
        onClick={() => {
          router.back();
        }}
      />
      <h1 className="title-20-bold">{title}</h1>
    </div>
  );
};

export default Header;
