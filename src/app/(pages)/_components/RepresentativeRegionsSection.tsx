'use client';

import Image from 'next/image';
import Link from 'next/link';

import MyPositionButton from '@/components/MyPositionButton';
import { useRepresentativeRegionsQuery } from '@/hooks/server/regions';

function RepresentativeRegionsSection() {
  const { data: representativeRegions } = useRepresentativeRegionsQuery();

  return (
    <section className="mt-48">
      <h1 className="px-20 title-20-md">어디로 가시나요?</h1>
      <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
        <MyPositionButton />
        {representativeRegions?.map(region => (
          <Link
            href={`/restaurants/region?region=${region.name}&centerX=${region.longitude}&centerY=${region.latitude}`}
            key={region.name}
            className="relative flex h-[64px] w-[64px] flex-none items-center justify-center overflow-hidden rounded-full bg-gray-200"
          >
            <Image src={region.imageUrl} alt={region.name} fill sizes="100%" className="object-cover" />
            <div className="absolute h-full w-full bg-gray-900 opacity-50" />
            <span className="z-10 text-white body-13-rg">{region.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RepresentativeRegionsSection;
