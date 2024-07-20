import CelebProfile from '@/components/CelebProfile';
import RestaurantCard from '@/components/RestaurantCard';
import Image from 'next/image';

const IMAGE_URL =
  'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj';

export default function Home() {
  return (
    <main className="">
      <section className="px-20 pt-20">
        <div className="h-48 w-full rounded-[12px] border border-gray-200 shadow-sm"></div>
      </section>
      <section className="mt-28">
        <h1 className="px-20 title-20-md">셀럽 BEST</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          <CelebProfile id={1} name="성시경" imageUrl={IMAGE_URL} border />
          <CelebProfile id={2} name="성시경" imageUrl={IMAGE_URL} />
          <CelebProfile id={3} name="성시경" imageUrl={IMAGE_URL} />
          <CelebProfile id={4} name="성시경" imageUrl={IMAGE_URL} />
          <CelebProfile id={5} name="성시경" imageUrl={IMAGE_URL} />
          <CelebProfile id={6} name="성시경" imageUrl={IMAGE_URL} />
          <CelebProfile id={7} name="성시경" imageUrl={IMAGE_URL} />
          <CelebProfile id={8} name="성시경" imageUrl={IMAGE_URL} />
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">셀럽들의 추천 맛집</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          <RestaurantCard
            name="올디스 타코"
            category="양식"
            imageUrl={IMAGE_URL}
            location="서울시 종로구"
            tag="성시경외 3명 추천 맛집"
          />
          <RestaurantCard
            name="올디스 타코"
            category="양식"
            imageUrl={IMAGE_URL}
            location="서울시 종로구"
            tag="성시경외 3명 추천 맛집"
          />
          <RestaurantCard
            name="올디스 타코"
            category="양식"
            imageUrl={IMAGE_URL}
            location="서울시 종로구"
            tag="성시경외 3명 추천 맛집"
          />
          <RestaurantCard
            name="올디스 타코"
            category="양식"
            imageUrl={IMAGE_URL}
            location="서울시 종로구"
            tag="성시경외 3명 추천 맛집"
          />
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
          <div className="h-[68px] w-[68px] rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] rounded-full bg-gray-200" />
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">지금 인기 있는 맛집!</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          <RestaurantCard
            name="올디스 타코"
            category="양식"
            imageUrl={IMAGE_URL}
            location="서울시 종로구"
            tag="성시경외 3명 추천 맛집"
          />
          <RestaurantCard
            name="올디스 타코"
            category="양식"
            imageUrl={IMAGE_URL}
            location="서울시 종로구"
            tag="성시경외 3명 추천 맛집"
          />
          <RestaurantCard
            name="올디스 타코"
            category="양식"
            imageUrl={IMAGE_URL}
            location="서울시 종로구"
            tag="성시경외 3명 추천 맛집"
          />
          <RestaurantCard
            name="올디스 타코"
            category="양식"
            imageUrl={IMAGE_URL}
            location="서울시 종로구"
            tag="성시경외 3명 추천 맛집"
          />
        </div>
      </section>
    </main>
  );
}
