'use client';

import { RestaurantData } from '@/@types';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const getCelebsRepresentationRestaurants = async (celebId: number): Promise<{ content: RestaurantData[] }> =>
  (
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/restaurants?lowLatitude=32&highLatitude=40&lowLongitude=120&highLongitude=132&sort=like&celebId=${celebId}&page=0`,
    )
  ).json();

interface CelebBestSectionCardsProps {
  selectedId: number | null;
}

const CelebBestSectionCards = ({ selectedId }: CelebBestSectionCardsProps) => {
  const { data } = useQuery({
    queryKey: ['restaurants', selectedId],
    queryFn: () => getCelebsRepresentationRestaurants(selectedId as number),
  });

  return (
    <>
      {data?.content.slice(0, 3).map(({ id, name, images, category, roadAddress }) => (
        <div className="flex w-full flex-col" key={id}>
          <Image
            fill
            className="w-full rounded-[8px] bg-gray-200 after:block after:pb-[100%] after:content-['']"
            alt={name}
            src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
          ></Image>
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
