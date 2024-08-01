'use client';

import { Celeb } from '@/@types';
import CelebProfile from '@/components/CelebProfile';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import CelebBestSectionCards from './CelebBestSectionCards';

interface CelebBestSectionProps {
  celebs: Celeb[];
}

const CelebBestSectionCardsSkeleton = () =>
  Array(3).fill(
    <div className="flex w-[calc((100%-20px)/3)] flex-col">
      <div className="relative aspect-square animate-pulse overflow-hidden rounded-[8px] bg-gray-200" />
      <div className="mt-10 flex flex-col gap-3 px-2">
        <div className="h-[17px] w-full animate-pulse rounded-md bg-gray-200"></div>
        <div className="h-[16.5px] w-1/5 animate-pulse rounded-md bg-gray-200"></div>
      </div>
      <div className="mt-8 h-16 w-1/2 animate-pulse rounded-md bg-gray-200"></div>
    </div>,
  );

const CelebBestSection = ({ celebs }: CelebBestSectionProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClickCelebProfile = async (id: number) => {
    setSelectedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="mt-28">
      <h1 className="px-20 title-20-md">셀럽 BEST </h1>
      <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
        {celebs.map(({ id, name, profileImageUrl }) => (
          <CelebProfile
            key={id}
            name={name}
            imageUrl={profileImageUrl}
            border={selectedId === id}
            onClick={() => handleClickCelebProfile(id)}
          />
        ))}
      </div>
      {selectedId && (
        <div className="animate-slide-down mt-16 overflow-hidden bg-gray-100 px-20 py-20">
          <div className="flex w-full gap-8">
            <Suspense fallback={<CelebBestSectionCardsSkeleton />}>
              <CelebBestSectionCards selectedId={selectedId} />
            </Suspense>
          </div>
          <Link
            href={`/celebs/${celebs.find(({ id }) => id === selectedId)?.id}`}
            className="mt-20 flex h-48 w-full items-center justify-center gap-8 rounded-[8px] bg-white"
          >
            <span className="body-16-md">셀럽 맛집 더보기</span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CelebBestSection;
