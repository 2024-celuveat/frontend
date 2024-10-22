import Image from 'next/image';
import Link from 'next/link';

import { getCelebritiesBest, getRecommendedRestaurantsByCelebrities } from '@/app/(actions)/restaurants/actions';
import * as Icon from '@/assets/icons/food-category';
import IconAlarm from '@/components/@icon/IconAlarm';
import IconArrowRight from '@/components/@icon/IconArrowRight';
import IconLocation from '@/components/@icon/IconLocation';
import IconNotice from '@/components/@icon/IconNotice';
import IconSearch from '@/components/@icon/IconSearch';
import { colors } from '@/constants/colors';

import CelebBestSection from './_components/CelebBestSection';
import CelebritiesRecommendedRestaurantsInformation from './_components/CelebritiesRecommendedRestaurantsInformation';
import RestaurantRecommendedSection from './_components/RestaurantRecommendedSection';
import { getRepresentativeRegions } from '../(actions)/regions/actions';

const FOOD_CATEGORY = [
  { name: '한식', icon: <Icon.Korean /> },
  { name: '중식', icon: <Icon.Chinese /> },
  { name: '일식', icon: <Icon.Japanese /> },
  { name: '양식', icon: <Icon.Western /> },
  { name: '패스트푸드', icon: <Icon.FastFood /> },
  { name: '고기', icon: <Icon.MeatDishes /> },
  { name: '국/찌개', icon: <Icon.SoupAndStew /> },
  { name: '면', icon: <Icon.Noodles /> },
  { name: '분식', icon: <Icon.SnackFood /> },
  { name: '세계음식', icon: <Icon.GlobalFood /> },
  { name: '주점', icon: <Icon.PubAndBar /> },
  { name: '커피/디저트', icon: <Icon.Desserts /> },
];

export default async function Home() {
  const bestCelebritiesData = getCelebritiesBest();
  const recommendedRestaurantsByCelebritiesData = getRecommendedRestaurantsByCelebrities();
  const representativeRegionsData = getRepresentativeRegions();

  const [bestCelebrities, recommendedRestaurantsByCelebrities, representativeRegions] = await Promise.all([
    bestCelebritiesData,
    recommendedRestaurantsByCelebritiesData,
    representativeRegionsData,
  ]);

  return (
    <main>
      <section className="flex items-center gap-16 px-20 pt-20">
        <Link
          href="/search"
          className="flex h-48 w-full items-center gap-10 rounded-[12px] bg-gray-100 pl-14 shadow-sm"
        >
          <IconSearch />
          <span className="text-gray-400 body-15-rg">원하는 식당을 검색해보세요.</span>
        </Link>
        <IconAlarm fill={colors.gray[800]} width={24} height={24} />
      </section>
      <CelebBestSection bestCelebrities={bestCelebrities} />
      <section className="mt-48">
        <div className="flex gap-2">
          <h1 className="pl-20 title-20-md">셀럽들의 추천 맛집</h1>
          <CelebritiesRecommendedRestaurantsInformation />
        </div>
        <RestaurantRecommendedSection restaurants={recommendedRestaurantsByCelebrities} />
      </section>
      <section className="mt-48 px-20">
        <Link
          href="/restaurants/weekly"
          className="flex h-48 w-full items-center justify-between rounded-[8px] bg-gray-800 px-16 py-12"
        >
          <div className="flex items-center">
            <IconNotice fill={colors.main[600]} />
            <span className="ml-12 text-white title-15-md">이번 주 업데이트 된 맛집 확인하러 가기</span>
          </div>
          <IconArrowRight width={20} height={20} fill={colors.white.DEFAULT} />
        </Link>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">무엇을 드시나요?</h1>
        <div className="mt-16 gap-y-16 px-20 food-category">
          {FOOD_CATEGORY.map(({ name, icon }) => (
            <Link href={`/restaurants?category=${name}`} className="flex flex-col items-center" key={name}>
              <div className="flex h-56 w-56 items-center justify-center rounded-[16px] bg-gray-100" key={name}>
                {icon}
              </div>
              <span className="mt-8 body-13-rg">{name}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">어디로 가시나요?</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          <div className="flex h-[64px] w-[64px] flex-none flex-col items-center justify-center gap-[3px] rounded-full bg-mainDim-15">
            <IconLocation fill={colors.main[700]} />
            <span className="text-main-700 body-13-rg">내 주변</span>
          </div>
          {representativeRegions.map(region => (
            <div
              key={region.name}
              className="relative flex h-[64px] w-[64px] flex-none items-center justify-center overflow-hidden rounded-full bg-gray-200"
            >
              <Image src={region.imageUrl} alt={region.name} fill sizes="100%" className="object-cover" />
              <div className="absolute h-full w-full bg-gray-900 opacity-50" />
              <span className="z-10 text-white body-13-rg">{region.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">지금 인기 있는 맛집!</h1>
        <RestaurantRecommendedSection restaurants={recommendedRestaurantsByCelebrities} />
      </section>
      <div className="h-16" />
    </main>
  );
}
