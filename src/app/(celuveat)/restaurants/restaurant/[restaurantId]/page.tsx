import Image from 'next/image';
import Link from 'next/link';

import { getRestaurant, getRestaurantsNearby, getRestaurantVideos } from '@/app/(actions)/restaurants/actions';
import { getRestaurantReviews } from '@/app/(actions)/reviews/actions';
import IconArrowRight from '@/components/@icon/IconArrowRight';
import IconBullet from '@/components/@icon/IconBullet';
import IconCall from '@/components/@icon/IconCall';
import IconClock from '@/components/@icon/IconClock';
import IconHere from '@/components/@icon/IconHere';
import Avatar from '@/components/Avatar';
import RestaurantCard from '@/components/RestaurantCard';
import ReviewCard from '@/components/ReviewCard';
import { formatToTenThousandUnits } from '@/utils/formatToTenThousandUnits';

import RestaurantAddInterestButton from './_components/RestaurantAddInterestButton';
import RestaurantDetailPageMap from './_components/RestaurantDetailPageMap';

async function RestaurantDetailPage({ params }: { params: { restaurantId: string } }) {
  const restaurantData = getRestaurant(Number(params.restaurantId));
  const videosData = getRestaurantVideos(Number(params.restaurantId));
  const restaurantsNearbyData = getRestaurantsNearby(Number(params.restaurantId));
  const reviewsData = getRestaurantReviews(Number(params.restaurantId), { size: 3 });

  const [restaurant, videos, restaurantsNearby, reviews] = await Promise.all([
    restaurantData,
    videosData,
    restaurantsNearbyData,
    reviewsData,
  ]);

  return (
    <div>
      <RestaurantDetailPageMap {...restaurant} />
      <main className="bg-white p-20">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-gray-800 body-14-md">{restaurant.category}</span>
              <IconBullet />
              <span className="text-gray-600 body-14-rg">
                {restaurant.roadAddress.split(' ').slice(0, 2).join(' ')}
              </span>
            </div>
            <h1 className="mt-4 title-22-md">{restaurant.name}</h1>
            <div className="mt-8 flex items-center gap-4">
              <Avatar
                size={24}
                alt={restaurant.visitedCelebrities[0]?.name}
                imageUrl={restaurant.visitedCelebrities[0]?.profileImageUrl}
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
          <button type="button" className="h-full flex-1 rounded-[8px] bg-gray-100 py-12 text-gray-700 title-15-md">
            네이버 지도로 보기
          </button>
        </div>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        <ul className="flex flex-col gap-6 py-20 text-gray-900 body-14-rg">
          <li className="flex items-center gap-4">
            <IconHere width={18} height={18} />
            <span>{restaurant.roadAddress}</span>
          </li>
          <li className="flex items-center gap-4">
            <IconClock width={18} height={18} />
            <span>{restaurant.businessHours}</span>
          </li>
          <li className="flex items-center gap-4">
            <IconCall width={18} height={18} />
            <span>{restaurant.phoneNumber}</span>
          </li>
        </ul>

        <div className="relative right-[20px] h-8 w-[calc(100%_+_40px)] bg-gray-100" />

        <h2 className="mt-24 title-20-md">영상으로 보기</h2>
        <iframe
          title="음식점 영상"
          className="mt-16 aspect-[16/9] w-full rounded-[8px]"
          src={`https://www.youtube.com/embed/${videos[0].videoUrl.split('=').at(-1)}`}
        />
        <div className="mt-16 flex justify-between">
          <div className="flex items-center gap-8">
            <Avatar size={32} alt={videos[0].celebrities[0].name} imageUrl={videos[0].celebrities[0].profileImageUrl} />
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

        <div className="relative right-[20px] mt-24 h-8 w-[calc(100%_+_40px)] bg-gray-100" />

        <section>
          <div className="mt-24 flex items-center justify-between">
            <h2 className="title-20-md">리뷰 {reviews.size}개</h2>
            <button type="button" className="flex items-center">
              <Link href={`/reviews?restaurantId=${params.restaurantId}`} className="text-gray-400 body-13-rg">
                더보기
              </Link>
              <IconArrowRight width={14} height={14} />
            </button>
          </div>

          <ul className="mt-16 flex flex-col">
            {reviews?.contents.map(review => (
              <>
                <ReviewCard key={review.id} review={review} />
                <hr className="my-16 h-1 w-full bg-gray-100" />
              </>
            ))}
          </ul>
          <Link href={`/reviews/review?restaurantId=${params.restaurantId}`}>
            <div className="mt-24 flex h-[50px] w-full items-center justify-center rounded-[8px] bg-mainDim-15 text-main-700 title-16-sb">
              방문 리뷰 남기기
            </div>
          </Link>
        </section>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        {restaurantsNearby.length > 0 && (
          <section className="mt-24">
            <h2 className="title-20-md">주변 식당 둘러보기</h2>
            <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll">
              {restaurantsNearby.map(props => (
                <RestaurantCard {...props} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default RestaurantDetailPage;
