'use client';

import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <div className="relative flex h-[58px] w-full items-center justify-center">
      <div
        className="top-18 absolute left-20 h-24 w-24 cursor-pointer rounded-full bg-gray-100"
        onClick={() => {
          router.back();
        }}
      ></div>
      <h1 className="title-20-bold">{title}</h1>
    </div>
  );
};

export default Header;
