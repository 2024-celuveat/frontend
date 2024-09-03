import { getRestaurant, getRestaurantsNearby, getRestaurantVideos } from '@/app/(actions)/restaurants/actions';
import IconArrowRight from '@/components/@icon/IconArrowRight';
import IconBullet from '@/components/@icon/IconBullet';
import IconHeartOutlined from '@/components/@icon/IconHeartOutlined';
import IconMore from '@/components/@icon/IconMore';
import IconStarFilled from '@/components/@icon/IconStarFilled';
import IconThumbsUpOutlined from '@/components/@icon/IconThumbsUpOutlined';
import { colors } from '@/constants/colors';
import Image from 'next/image';
import Link from 'next/link';
import RestaurantDetailPageMap from './_components/RestaurantDetailPageMap';
import RestaurantAddInterestButton from './_components/RestaurantAddInterestButton';
import { formatToTenThousandUnits } from '@/utils/formatToTenThousandUnits';

const RestaurantDetailPage = async ({ params }: { params: { restaurantId: string } }) => {
  const restaurant = await getRestaurant(Number(params.restaurantId));
  const videos = await getRestaurantVideos(Number(params.restaurantId));
  const restaurantsNearby = await getRestaurantsNearby(Number(params.restaurantId));

  return (
    <div>
      <RestaurantDetailPageMap {...restaurant} />
      <main className="bg-white p-20">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-gray-800 body-14-md">{restaurant.category}</span>
              <IconBullet />
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
        <iframe
          className="mt-16 aspect-[16/9] w-full rounded-[8px]"
          src={`https://www.youtube.com/embed/${videos[0].videoUrl.split('=').at(-1)}`}
        />
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
            <IconBullet />
            <div className="flex items-center gap-2">
              <span className="text-gray-400 body-14-rg">구독자</span>
              <span className="text-gray-600 body-14-md">
                {formatToTenThousandUnits(videos[0].celebrities[0].subscriberCount)}명
              </span>
            </div>
          </div>
        </div>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        <section>
          <div className="mt-24 flex items-center justify-between">
            <h2 className="title-20-md">리뷰 00개</h2>
            <button className="flex items-center">
              <span className="text-gray-400 body-13-rg">더보기</span>
              <IconArrowRight width={14} height={14} />
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
                <IconMore />
              </div>

              <div className="mt-10 flex gap-1">
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled fill={colors.gray[200]} />
              </div>

              <p className="mt-12 text-gray-900 body-13-rg">
                유저 리뷰 내용 최대 3줄 노출 후 말줄임 처리 가나다라마바사아자차카타파하 유저 리뷰 내용 최대 3줄 노출 후
                말줄임 처리 가나다라마바사아자차카타파하 유저 리뷰 내용 최대 3줄 노출 후 말줄임 처리
                가나다라마바사아자차카타파하
              </p>

              <button className="mt-14 flex items-center gap-2 rounded-[6px] border border-gray-200 p-8">
                <IconThumbsUpOutlined fill={colors.gray[300]} />
                <span className="text-gray-600 caption-12-rg">100</span>
              </button>
            </li>
          </ul>
          <button className="mt-24 h-[50px] w-full rounded-[8px] bg-mainDim-15 text-main-700 title-16-sb">
            방문 리뷰 남기기
          </button>
        </section>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        {restaurantsNearby.length > 0 && (
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
                    <IconHeartOutlined className="absolute right-8 top-8 *:fill-white" />
                  </div>
                  <div className="mt-12 overflow-x-hidden text-ellipsis whitespace-nowrap">
                    <span className="title-15-md">{name}</span>
                    <span className="ml-4 caption-12-rg">{category}</span>
                  </div>
                  <span className="mt-4 overflow-x-hidden text-ellipsis whitespace-nowrap body-13-rg">
                    {roadAddress}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default RestaurantDetailPage;
