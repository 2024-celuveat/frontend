'use client';

import Image from 'next/image';

interface TabProps {
  label: string;
  imageUrl?: string;
  isActive?: boolean;
}

function Tab({ label, imageUrl, isActive = false }: TabProps) {
  return (
    <div
      className={`flex h-40 w-fit items-center justify-center rounded-[100px] border px-[14px] ${isActive && 'border-[1.5px] border-main-500'}`}
    >
      {imageUrl && <Image src={imageUrl} alt={label} width={24} height={24} />}
      <span className={`text-gray-800 body-15-rg ${isActive && 'font-[700_!important] text-main-500'}`}> {label}</span>
    </div>
  );
}

export default Tab;
