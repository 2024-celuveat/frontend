import RestaurantCard from '@/components/RestaurantCard';

import CelebBestSection from './_client/CelebBestSection';
import { Celeb, RestaurantData } from '@/@types';

const getCelebs = async (): Promise<Celeb[]> => (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/celebs`)).json();

const getCelebsRecommendations = async (): Promise<RestaurantData[]> =>
  (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/main-page/recommendation`)).json();

export default async function Home() {
  const celebs = await getCelebs();
  const celebsRecommendations = await getCelebsRecommendations();

  return (
    <main className="">
      <section className="px-20 pt-20">
        <div className="h-48 w-full rounded-[12px] border border-gray-200 shadow-sm"></div>
      </section>
      <CelebBestSection celebs={[...celebs].reverse()} />
      <section className="mt-48">
        <h1 className="px-20 title-20-md">셀럽들의 추천 맛집</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          {[...celebsRecommendations].reverse().map(({ id, name, category, images, roadAddress }) => (
            <RestaurantCard
              key={id}
              name={name}
              category={category}
              imageUrl={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
              location={roadAddress}
              tag="성시경외 3명 추천 맛집"
            />
          ))}
        </div>
      </section>
      <section className="mt-48 px-20">
        <div className="flex h-48 w-full items-center bg-gray-100 px-16 py-12">
          <div className="flex h-24 w-24 items-center justify-start text-nowrap rounded-full bg-gray-200">아이콘</div>
          <span className="ml-12 title-15-md">이번 주 업데이트 된 맛집 확인하러 가기</span>
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">무엇을 드시나요?</h1>
        <div className="mt-16 grid grid-cols-5 gap-y-16 px-20">
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">어디로 가시나요?</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">지금 인기 있는 맛집!</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          {celebsRecommendations.map(({ id, name, category, images, roadAddress }) => (
            <RestaurantCard
              key={id}
              name={name}
              category={category}
              imageUrl={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
              location={roadAddress}
              tag="성시경외 3명 추천 맛집"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
