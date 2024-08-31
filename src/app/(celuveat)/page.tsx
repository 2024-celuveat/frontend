import CelebBestSection from '@/components/CelebBestSection';
import RestaurantRecommendedSection from '@/components/RestaurantRecommendedSection';
import { getCelebritiesBest, getRecommendedRestaurantsByCelebrities } from '@/app/(actions)/restaurants/actions';
import IconInfo from '@/components/@icon/IconInfo';
import IconSearch from '@/components/@icon/IconSearch';
import IconNotice from '@/components/@icon/IconNotice';

export default async function Home() {
  const bestCelebrities = await getCelebritiesBest();
  const recommendedRestaurantsByCelebrities = await getRecommendedRestaurantsByCelebrities();

  return (
    <main className="">
      <section className="px-20 pt-20">
        <div className="flex h-48 w-full items-center gap-10 rounded-[12px] bg-gray-100 pl-14 shadow-sm">
          <IconSearch />
          <span className="text-gray-400 body-15-rg">원하는 식당을 검색해보세요.</span>
        </div>
      </section>
      <CelebBestSection bestCelebrities={bestCelebrities} />
      <section className="mt-48">
        <div className="flex gap-2">
          <h1 className="pl-20 title-20-md">셀럽들의 추천 맛집</h1>
          <IconInfo />
        </div>
        <RestaurantRecommendedSection restaurants={recommendedRestaurantsByCelebrities} />
      </section>
      <section className="mt-48 px-20">
        <div className="flex h-48 w-full items-center rounded-[8px] bg-gray-800 px-16 py-12">
          <IconNotice className="*:fill-main-600" />
          <span className="ml-12 text-white title-15-md">이번 주 업데이트 된 맛집 확인하러 가기</span>
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
        <RestaurantRecommendedSection restaurants={recommendedRestaurantsByCelebrities} />
      </section>
    </main>
  );
}
