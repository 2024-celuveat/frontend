import * as motion from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getInterestedCelebrities } from '@/app/(actions)/celebs/actions';
import { getInterestedRestaurants } from '@/app/(actions)/restaurants/actions';
import RestaurantCardRow from '@/components/RestaurantCardRow';
import { formatToTenThousandUnits } from '@/utils/formatToTenThousandUnits';

import CelebrityLikeButton from './_components/CelebrityLikeButton';

const TABS = ['맛집', '셀럽'] as const;

async function InterestedPage({ searchParams: { tab = '맛집' } }: { searchParams: { tab: string } }) {
  const interestedRestaurantsData = getInterestedRestaurants();
  const interestedCelebritiesData = getInterestedCelebrities();

  const [interestedRestaurants, interestedCelebrities] = await Promise.all([
    interestedRestaurantsData,
    interestedCelebritiesData,
  ]);

  return (
    <main className="p-20">
      <div className="flex h-52 space-x-1 rounded-[8px] bg-gray-100 p-4">
        {TABS.map(value => (
          <Link
            href={`/interested?tab=${value}`}
            type="button"
            key={value}
            className="relative flex flex-1 items-center justify-center text-gray-900 transition title-16-sb"
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {tab === value && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-gray-900 mix-blend-color-dodge"
                style={{ borderRadius: 8 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {value}
          </Link>
        ))}
      </div>
      {tab === '맛집' && (
        <section className="mt-24">
          <div className="title-20-md">
            <span className="text-main-700 title-20-bold">{interestedRestaurants?.size}</span>개
            <ul className="mt-16 flex flex-col gap-24">
              {interestedRestaurants?.contents?.map(item => <RestaurantCardRow key={item.id} {...item} />)}
            </ul>
          </div>
        </section>
      )}
      {tab === '셀럽' && (
        <section className="mt-24">
          <div className="title-20-md">
            <span className="text-main-700 title-20-bold">{interestedCelebrities?.length}</span>명
            <ul className="mt-16 flex flex-col gap-24">
              {interestedCelebrities?.map(item => (
                <li key={item.id} className="flex items-center gap-10">
                  <Link href={`/celebs/${item.id}`} className="relative">
                    <Image
                      className="h-[56px] rounded-full object-cover"
                      src={item.profileImageUrl}
                      alt={item.name}
                      width={56}
                      height={56}
                      priority
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-center">
                    <span className="title-16-sb">{item.name}</span>
                    <div className="">
                      <span className="body-14-rg">구독자</span>
                      <span className="ml-2 body-14-md">
                        {formatToTenThousandUnits(item.youtubeContentResults[0].subscriberCount)}명
                      </span>
                      <span className="ml-12 body-14-rg">추천 매장</span>
                      <span className="ml-2 body-14-md">
                        {item.youtubeContentResults.reduce((acc, { restaurantCount }) => acc + restaurantCount, 0)}
                      </span>
                    </div>
                  </div>
                  <CelebrityLikeButton celebrityId={item.id} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

export default InterestedPage;
