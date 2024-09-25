'use client';

import { useState } from 'react';
import * as motion from 'framer-motion/client';
import RestaurantCardRow from '@/components/RestaurantCardRow';
import { formatToTenThousandUnits } from '@/utils/formatToTenThousandUnits';
import Link from 'next/link';
import CelebrityLikeButton from './CelebrityLikeButton';
import Image from 'next/image';
import { getInterestedRestaurants } from '@/app/(actions)/restaurants/actions';
import { getInterestedCelebrities } from '@/app/(actions)/celebs/actions';

interface InterestedProps {
  interestedRestaurants: Awaited<ReturnType<typeof getInterestedRestaurants>>;
  interestedCelebrities: Awaited<ReturnType<typeof getInterestedCelebrities>>;
}

const Interested = ({ interestedRestaurants, interestedCelebrities }: InterestedProps) => {
  const [tab, setTab] = useState<'맛집' | '셀럽'>('맛집');

  return (
    <>
      <div className="flex h-52 space-x-1 rounded-[8px] bg-gray-100 p-4">
        <button
          type="button"
          onClick={() => {
            setTab('맛집');
          }}
          className="relative flex flex-1 items-center justify-center text-gray-900 transition title-16-sb"
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {tab === '맛집' && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-gray-900 mix-blend-color-dodge"
              style={{ borderRadius: 8 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          맛집
        </button>
        <button
          type="button"
          onClick={() => {
            setTab('셀럽');
          }}
          className="relative flex flex-1 items-center justify-center text-gray-900 transition title-16-sb"
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {tab === '셀럽' && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-gray-900 mix-blend-color-dodge"
              style={{ borderRadius: 8 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          셀럽
        </button>
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
    </>
  );
};

export default Interested;
