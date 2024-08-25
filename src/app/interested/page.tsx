'use client';

import RestaurantCardRow from '@/components/RestaurantCardRow';
import { useInterestedCelebritiesQuery, useInterestedRestaurantQuery } from '@/hooks/server';
import Image from 'next/image';
import { useState } from 'react';

const InterestedPage = () => {
  const [tab, setTab] = useState<'맛집' | '셀럽'>('맛집');
  const { data: interestedRestaurants } = useInterestedRestaurantQuery();
  const { data: interestedCelebrities } = useInterestedCelebritiesQuery();

  return (
    <main className="p-20">
      <div className="flex h-52 rounded-[8px] bg-gray-100 p-4">
        <button
          className={`flex w-1/2 items-center justify-center rounded-[8px] title-16-sb ${tab === '맛집' && 'bg-white'}`}
          onClick={() => setTab('맛집')}
        >
          맛집
        </button>
        <button
          className={`flex w-1/2 items-center justify-center rounded-[8px] title-16-sb ${tab === '셀럽' && 'bg-white'}`}
          onClick={() => setTab('셀럽')}
        >
          셀럽
        </button>
      </div>
      <section className="mt-24">
        {tab === '맛집' && (
          <div className="title-20-md">
            <span className="text-main-700 title-20-bold">{interestedRestaurants.size}</span>개
            <ul className="mt-16 flex flex-col gap-24">
              {interestedRestaurants.contents?.map(item => <RestaurantCardRow key={item.id} {...item} />)}
            </ul>
          </div>
        )}

        {tab === '셀럽' && (
          <div className="title-20-md">
            <span className="text-main-700 title-20-bold">{interestedCelebrities.length}</span>명
            <ul className="mt-16 flex flex-col gap-24">
              {interestedCelebrities.map(item => (
                <li key={item.id} className="flex items-center gap-10">
                  <div className="relative">
                    <Image
                      className={'h-[56px] rounded-full object-cover'}
                      src={item.profileImageUrl}
                      alt={item.name}
                      width={56}
                      height={56}
                      priority
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <span className="title-16-sb">{item.name}</span>
                    <div className="">
                      <span className="body-14-rg">구독자</span>
                      <span className="ml-2 body-14-md">{item.youtubeContentResults[0].subscriberCount}</span>
                      <span className="ml-12 body-14-rg">추천 매장</span>
                      <span className="ml-2 body-14-md">
                        {item.youtubeContentResults.reduce((acc, { restaurantCount }) => acc + restaurantCount, 0)}
                      </span>
                    </div>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5 9.3125C22.5 15.875 12.7697 21.1869 12.3553 21.4062C12.2461 21.465 12.124 21.4958 12 21.4958C11.876 21.4958 11.7539 21.465 11.6447 21.4062C11.2303 21.1869 1.5 15.875 1.5 9.3125C1.50174 7.77146 2.11468 6.29404 3.20436 5.20436C4.29404 4.11468 5.77146 3.50174 7.3125 3.5C9.5 3.49753 10.9434 4.3325 12 5.73969C13.0566 4.3325 14.5 3.5 16.6875 3.5C18.2285 3.50174 19.706 4.11468 20.7956 5.20436C21.8853 6.29404 22.4983 7.77146 22.5 9.3125Z"
                      fill="#FF7B54"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
};

export default InterestedPage;
