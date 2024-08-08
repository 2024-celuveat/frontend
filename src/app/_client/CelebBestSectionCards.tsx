'use client';

import { useCelebsRestaurants } from '@/hooks/server';

import Image from 'next/image';
import Link from 'next/link';

interface CelebBestSectionCardsProps {
  selectedId: number;
}

const CelebBestSectionCards = ({ selectedId }: CelebBestSectionCardsProps) => {
  const { data } = useCelebsRestaurants(selectedId);

  return (
    <>
      {data.content.slice(0, 3).map(({ id, name, images, category, roadAddress }) => (
        <Link href={`/restaurant/${id}`} className="flex w-[calc((100%-20px)/3)] flex-col" key={id}>
          <div className="relative aspect-square overflow-hidden rounded-[8px] bg-gray-200">
            <Image
              fill
              alt={name}
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="mt-10 flex flex-col gap-3 px-2">
            <span className="body-14-md">{name}</span>
            <span className="text-[11px] text-gray-600">{category}</span>
          </div>
          <div className="mt-6">
            <span className="caption-12-rg">{roadAddress.split(' ').slice(0, 2).join(' ')}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CelebBestSectionCards;
