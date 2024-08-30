import { getInterestedRestaurants } from '@/app/(actions)/restaurants/actions';
import RestaurantCardRow from '@/components/RestaurantCardRow';
import Link from 'next/link';

const InterestedRestaurantPage = async () => {
  const interestedRestaurants = await getInterestedRestaurants();

  return (
    <main className="p-20">
      <div className="flex h-52 rounded-[8px] bg-gray-100 p-4">
        <Link
          href={'/interested/restaurants'}
          className={'flex w-1/2 items-center justify-center rounded-[8px] bg-white title-16-sb'}
        >
          맛집
        </Link>
        <Link
          href={'/interested/celebrities'}
          className={'flex w-1/2 items-center justify-center rounded-[8px] title-16-sb'}
        >
          셀럽
        </Link>
      </div>
      <section className="mt-24">
        <div className="title-20-md">
          <span className="text-main-700 title-20-bold">{interestedRestaurants?.size}</span>개
          <ul className="mt-16 flex flex-col gap-24">
            {interestedRestaurants?.contents?.map(item => <RestaurantCardRow key={item.id} {...item} />)}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default InterestedRestaurantPage;
