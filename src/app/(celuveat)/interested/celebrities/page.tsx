import { getInterestedCelebrities } from '@/app/(actions)/celebs/actions';
import IconHeartFilled from '@/components/@icon/IconHeartFilled';
import Image from 'next/image';
import Link from 'next/link';

const InterestedCelebritiesPage = async () => {
  const interestedCelebrities = await getInterestedCelebrities();

  return (
    <main className="p-20">
      <div className="flex h-52 rounded-[8px] bg-gray-100 p-4">
        <Link
          href={'/interested/restaurants'}
          className={'flex w-1/2 items-center justify-center rounded-[8px] title-16-sb'}
        >
          맛집
        </Link>
        <Link
          href={'/interested/celebrities'}
          className={'flex w-1/2 items-center justify-center rounded-[8px] bg-white title-16-sb'}
        >
          셀럽
        </Link>
      </div>
      <section className="mt-24">
        <div className="title-20-md">
          <span className="text-main-700 title-20-bold">{interestedCelebrities?.length}</span>명
          <ul className="mt-16 flex flex-col gap-24">
            {interestedCelebrities?.map(item => (
              <li key={item.id} className="flex items-center gap-10">
                <Link href={`/celebs/${item.id}`} className="relative">
                  <Image
                    className={'h-[56px] rounded-full object-cover'}
                    src={item.profileImageUrl}
                    alt={item.name}
                    width={56}
                    height={56}
                    priority
                  />
                </Link>
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
                <IconHeartFilled />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default InterestedCelebritiesPage;
