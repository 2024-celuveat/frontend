import { getCelebritiesBest, getRecommendedRestaurantsByCelebrities } from '@/app/(actions)/restaurants/actions';
import IconSearch from '@/components/@icon/IconSearch';
import IconNotice from '@/components/@icon/IconNotice';
import { colors } from '@/constants/colors';
import {
  IconChinese,
  IconDesserts,
  IconFastFood,
  IconGlobalFood,
  IconJapanese,
  IconKorean,
  IconMeatDishes,
  IconPubAndBar,
  IconWestern,
} from '@/assets/icons/food-category';
import Link from 'next/link';

import IconArrowRight from '@/components/@icon/IconArrowRight';
import CelebritiesRecommendedRestaurantsInformation from './_components/CelebritiesRecommendedRestaurantsInformation';
import CelebBestSection from './_components/CelebBestSection';
import RestaurantRecommendedSection from './_components/RestaurantRecommendedSection';

const FOOD_CATEGORY = [
  { name: '한식', icon: <IconKorean /> },
  { name: '중식', icon: <IconChinese /> },
  { name: '일식', icon: <IconJapanese /> },
  { name: '양식', icon: <IconWestern /> },
  { name: '패스트푸드', icon: <IconFastFood /> },
  { name: '고기', icon: <IconMeatDishes /> },
  // { name: '국/찌개', icon: <IconSoupAndStew /> },
  // { name: '면', icon: <IconNoodles /> },
  // { name: '분식', icon: <IconSnackFood /> },
  { name: '세계음식', icon: <IconGlobalFood /> },
  { name: '주점', icon: <IconPubAndBar /> },
  { name: '커피/디저트', icon: <IconDesserts /> },
];

export default async function Home() {
  const bestCelebrities = await getCelebritiesBest();
  const recommendedRestaurantsByCelebrities = await getRecommendedRestaurantsByCelebrities();

  return (
    <main className="">
      <section className="px-20 pt-20">
        <Link
          href={'/search'}
          className="flex h-48 w-full items-center gap-10 rounded-[12px] bg-gray-100 pl-14 shadow-sm"
        >
          <IconSearch />
          <span className="text-gray-400 body-15-rg">원하는 식당을 검색해보세요.</span>
        </Link>
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
        <div className="flex h-48 w-full items-center justify-between rounded-[8px] bg-gray-800 px-16 py-12">
          <div className="flex items-center">
            <IconNotice fill={colors.main[600]} />
            <span className="ml-12 text-white title-15-md">이번 주 업데이트 된 맛집 확인하러 가기</span>
          </div>
          <IconArrowRight width={20} height={20} fill={colors.white.DEFAULT} />
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">무엇을 드시나요?</h1>
        <div className="mt-16 grid grid-cols-5 gap-y-16 px-20">
          {FOOD_CATEGORY.map(({ name, icon }) => (
            <Link href={`/restaurants/category/${name}`} className="flex flex-col items-center" key={name}>
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
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">지금 인기 있는 맛집!</h1>
        <RestaurantRecommendedSection restaurants={recommendedRestaurantsByCelebrities} />
      </section>
    </main>
  );
}
