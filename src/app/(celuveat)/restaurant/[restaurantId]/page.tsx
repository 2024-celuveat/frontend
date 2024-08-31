import { getRestaurant, getRestaurantsNearby, getRestaurantVideos } from '@/app/(actions)/restaurants/actions';
import { IconArrowRight14, IconHeartEmpty24 } from '@/assets/icons';
import RestaurantAddInterestButton from '@/components/RestaurantAddInterestButton';
import Image from 'next/image';
import Link from 'next/link';

const RestaurantDetailPage = async ({ params }: { params: { restaurantId: string } }) => {
  const restaurant = await getRestaurant(Number(params.restaurantId));
  const videos = await getRestaurantVideos(Number(params.restaurantId));
  const restaurantsNearby = await getRestaurantsNearby(Number(params.restaurantId));

  return (
    <div>
      <div className="h-[240px] w-full bg-gray-200" />
      <main className="relative bottom-16 rounded-t-[16px] bg-white p-20">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-gray-800 body-14-md">{restaurant.category}</span>
              <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" fill="#BEBEC0" />
              </svg>
              <span className="text-gray-600 body-14-rg">{restaurant.roadAddress}</span>
            </div>
            <h1 className="mt-4 title-22-md">{restaurant.name}</h1>
            <div className="mt-8 flex items-center gap-4">
              <Image
                className="rounded-full"
                width={24}
                height={24}
                alt={restaurant.visitedCelebrities[0]?.name}
                src={restaurant.visitedCelebrities[0]?.profileImageUrl}
              />
              <p className="body-13-rg">
                <span className="border-b-[5px] border-b-mainDim-15 text-main-700">
                  {restaurant.visitedCelebrities[0]?.name}
                </span>
                이 추천한 맛집
              </p>
            </div>
          </div>
          {restaurant.images.length > 0 && (
            <Image
              className="h-72 rounded-[8px] object-cover"
              width={72}
              height={72}
              alt={restaurant.name}
              src={restaurant.images[0]?.url}
            />
          )}
        </div>
        <p className="mt-14 body-13-rg">{restaurant.introduction}</p>

        <div className="mt-20 flex h-[44px] gap-10">
          <RestaurantAddInterestButton liked={restaurant.liked} restaurantId={Number(params.restaurantId)} />
          <button className="h-full flex-1 rounded-[8px] bg-gray-100 py-12 text-gray-700 title-15-md">
            네이버 지도로 보기
          </button>
        </div>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        <h2 className="mt-24 title-20-md">영상으로 보기</h2>
        <iframe className="mt-16 h-[240px] w-full rounded-[8px]" src={videos[0].videoUrl} />
        <div className="mt-16 flex justify-between">
          <div className="flex items-center gap-8">
            <Image
              className="rounded-full"
              width={32}
              height={32}
              alt={videos[0].celebrities[0].name}
              src={videos[0].celebrities[0].profileImageUrl}
            />
            <span className="text-gray-900 body-16-md">{videos[0].celebrities[0].name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 body-14-rg">추천 맛집</span>
              <span className="text-gray-600 body-14-md">{videos[0].celebrities[0].restaurantCount}개</span>
            </div>
            <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1" cy="1" r="1" fill="#BEBEC0" />
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 body-14-rg">구독자</span>
              <span className="text-gray-600 body-14-md">{videos[0].celebrities[0].subscriberCount}명</span>
            </div>
          </div>
        </div>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        <section>
          <div className="mt-24 flex items-center justify-between">
            <h2 className="title-20-md">리뷰 00개</h2>
            <button className="flex items-center">
              <span className="text-gray-400 body-13-rg">더보기</span>
              <IconArrowRight14 />
            </button>
          </div>

          <ul className="mt-16 flex flex-col">
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="h-[25px] w-[25px] rounded-full bg-gray-100" />
                  <span className="text-gray-900 title-16-sb">셀럽잇</span>
                  <span className="text-gray-400 caption-12-rg">2022.05.18</span>
                </div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7Z"
                    fill="#909097"
                  />
                  <path
                    d="M12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14Z"
                    fill="#909097"
                  />
                  <path
                    d="M12 21C12.8284 21 13.5 20.3284 13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21Z"
                    fill="#909097"
                  />
                </svg>
              </div>

              <div className="mt-10 flex gap-1">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
              </div>

              <p className="mt-12 text-gray-900 body-13-rg">
                유저 리뷰 내용 최대 3줄 노출 후 말줄임 처리 가나다라마바사아자차카타파하 유저 리뷰 내용 최대 3줄 노출 후
                말줄임 처리 가나다라마바사아자차카타파하 유저 리뷰 내용 최대 3줄 노출 후 말줄임 처리
                가나다라마바사아자차카타파하
              </p>

              <div className="mt-14 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 caption-12-rg">조회수</span>
                  <span className="text-gray-600 caption-12-md">58</span>
                </div>
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1" r="1" fill="#BEBEC0" />
                </svg>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 caption-12-rg">도움돼요</span>
                  <span className="text-gray-600 caption-12-md">100</span>
                </div>
              </div>

              <button className="mt-14 flex items-center gap-2 rounded-[6px] border border-gray-200 p-8">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.21428 2.15708C7.78311 3.43987 6.95008 4.5132 6.05241 5.34181C5.12676 6.19625 4.10696 6.81417 3.31799 7.15075C3.20355 7.19958 3.1524 7.29455 3.1524 7.36757V13.5133H11.3782L13.3358 7.3609L9.58837 7.36091C9.0359 7.36092 8.65754 6.83339 8.79392 6.32069C9.28655 4.4687 9.20744 3.38745 8.96621 2.80552C8.77682 2.34864 8.48503 2.18536 8.21428 2.15708ZM9.77971 6.38948C10.2442 4.55775 10.2146 3.28038 9.8636 2.43353C9.48186 1.51263 8.73592 1.14677 8.02675 1.18353C7.64816 1.20316 7.40825 1.4849 7.32617 1.74689C6.97352 2.87246 6.23731 3.84912 5.39352 4.62799C4.54992 5.40669 3.62416 5.964 2.93681 6.25724C2.51285 6.4381 2.18097 6.85526 2.18097 7.36757V13.6657C2.18097 14.118 2.54767 14.4847 3.00002 14.4847H11.4896C11.8463 14.4847 12.162 14.2539 12.2701 13.914L14.3246 7.45686C14.4927 6.92862 14.0985 6.38947 13.5442 6.38947L9.77971 6.38948Z"
                    fill="#BEBEC0"
                  />
                </svg>
                <span className="text-gray-600 caption-12-rg">도움돼요!</span>
              </button>
            </li>
          </ul>
          <button className="mt-24 h-[50px] w-full rounded-[8px] bg-mainDim-15 text-main-700 title-16-sb">
            방문 리뷰 남기기
          </button>
        </section>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        <section className="mt-24">
          <h2 className="title-20-md">주변 식당 둘러보기</h2>
          <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll">
            {restaurantsNearby.map(({ id, name, category, images, roadAddress }) => (
              <Link key={id} className="flex w-[140px] flex-none flex-col" href={`/restaurant/${name}`}>
                <div className="relative h-[140px] w-full overflow-hidden rounded-[8px] bg-gray-200">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
                    fill
                    alt={name}
                    sizes="100%"
                    className="object-cover"
                  />
                  <IconHeartEmpty24 className="absolute right-8 top-8 *:fill-white" />
                </div>
                <div className="mt-12 overflow-x-hidden text-ellipsis whitespace-nowrap">
                  <span className="title-15-md">{name}</span>
                  <span className="ml-4 caption-12-rg">{category}</span>
                </div>
                <span className="mt-4 overflow-x-hidden text-ellipsis whitespace-nowrap body-13-rg">{roadAddress}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantDetailPage;
