'use client';

import { Celeb, RestaurantData } from '@/@types';
import CelebProfile from '@/components/CelebProfile';
import Link from 'next/link';
import { use, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import CelebBestSectionCards from './CelebBestSectionCards';

interface CelebBestSectionProps {
  celebs: Celeb[];
}

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
            <CelebBestSectionCards selectedId={selectedId} />
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
