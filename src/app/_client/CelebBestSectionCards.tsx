'use client';

import { useCelebsRepresentativeRestaurants } from '@/hooks/server';

import Image from 'next/image';

interface CelebBestSectionCardsProps {
  selectedId: number;
}

const CelebBestSectionCards = ({ selectedId }: CelebBestSectionCardsProps) => {
  const { data } = useCelebsRepresentativeRestaurants(selectedId);

  return (
    <>
      {data?.content.slice(0, 3).map(({ id, name, images, category, roadAddress }) => (
        <div className="flex w-[calc((100%-20px)/3)] flex-col" key={id}>
          <div className="relative aspect-square overflow-hidden rounded-[8px]">
            <Image
              fill
              objectFit="cover"
              alt={name}
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
            />
          </div>
          <div className="mt-10 flex flex-col gap-3 px-2">
            <span className="body-14-md">{name}</span>
            <span className="text-[11px] text-gray-600">{category}</span>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-gray-200"></div>
            <span className="caption-12-rg">{roadAddress.split(' ').slice(0, 2).join(' ')}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CelebBestSectionCards;
