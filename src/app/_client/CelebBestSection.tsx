'use client';

import { Celeb } from '@/@types';
import CelebProfile from '@/components/CelebProfile';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import CelebBestSectionCards from './CelebBestSectionCards';
import { IconArrowRight14 } from '@/assets/icons';

interface CelebBestSectionProps {
  celebs: Celeb[];
}

const CelebBestSectionCardsSkeleton = () =>
  [1, 2, 3].map(value => (
    <div className="flex w-[calc((100%-20px)/3)] flex-col" key={value}>
      <div className="relative aspect-square animate-pulse overflow-hidden rounded-[8px] bg-gray-200" />
      <div className="mt-10 flex flex-col gap-3 px-2">
        <div className="h-[17px] w-full animate-pulse rounded-md bg-gray-200"></div>
        <div className="h-[16.5px] w-1/5 animate-pulse rounded-md bg-gray-200"></div>
      </div>
      <div className="mt-6 h-[14.5px] w-1/2 animate-pulse rounded-md bg-gray-200"></div>
    </div>
  ));

const CelebBestSection = ({ celebs }: CelebBestSectionProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClickCelebProfile = async (id: number) => {
    setSelectedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="mt-28">
      <h1 className="px-20 title-20-md">셀럽 BEST </h1>
      <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-y-auto overflow-x-scroll px-20 py-11 pt-3">
        {celebs.map(({ id, name, profileImageUrl }) => (
          <CelebProfile
            key={id}
            name={name}
            imageUrl={profileImageUrl}
            outlined={selectedId === id}
            onClick={() => handleClickCelebProfile(id)}
          />
        ))}
      </div>
      {selectedId && (
        <div className="bg-mainDim-8 mt-8 animate-slide-down overflow-hidden px-20 py-20">
          <div className="flex justify-between">
            <p className="title-16-sb">
              <span className="text-main-500">{celebs.find(({ id }) => id === selectedId)?.name}</span> 추천 맛집
              이에요!
            </p>
            <Link className="flex items-center" href={`/celebs/${celebs.find(({ id }) => id === selectedId)?.id}`}>
              <span className="text-gray-400 body-13-rg">더보기</span>
              <IconArrowRight14 />
            </Link>
          </div>
          <div className="mt-16 flex w-full gap-8">
            <Suspense fallback={<CelebBestSectionCardsSkeleton />}>
              <CelebBestSectionCards selectedId={selectedId} />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
};

export default CelebBestSection;
