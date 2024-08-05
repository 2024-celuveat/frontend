import Header from '@/components/Header';
import CelebIntroductionSection from '../_client/CelebIntroductionSection';
import { RestaurantData } from '@/@types';
import Image from 'next/image';
import Link from 'next/link';

const getCelebsRepresentationRestaurants = async (celebId: number): Promise<{ content: RestaurantData[] }> =>
  (
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/restaurants?lowLatitude=32&highLatitude=40&lowLongitude=120&highLongitude=132&sort=like&celebId=${celebId}`,
    )
  ).json();

const CelebPageRestaurantCard = ({ id, name, images, category, roadAddress }: RestaurantData) => {
  return (
    <Link href={`/restaurant/${id}`} className="flex gap-12">
      <div className="relative h-[112px] w-[112px] overflow-hidden rounded-[8px] bg-gray-200">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
          fill
          alt={name}
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="relative flex flex-1 flex-col">
        <h3 className="mt-2 title-16-sb">{name}</h3>
        <span className="mt-4 text-gray-400 caption-12-rg">{category}</span>
        <span className="text-gray-800 body-13-rg">{roadAddress}</span>

        <p className="absolute bottom-0 left-0 text-gray-600 body-13-rg">식당 소개글 가나다라마바사아자차타파...</p>
      </div>
    </Link>
  );
};

const CelebPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const data = await getCelebsRepresentationRestaurants(Number(id));

  return (
    <>
      <Header title="맛집 추천 리스트" />
      <main className="px-20 pt-16">
        <CelebIntroductionSection celebId={Number(id)} />
        <hr className="mt-28 h-1 w-full bg-gray-200" />

        <div className="mt-28 flex justify-between">
          <h2 className="title-20-md">{data.content?.length}개 매장</h2>
          <span className="body-13-rg">최신순</span>
        </div>

        <ul className="mt-24 flex flex-col gap-20">
          {data.content?.map(props => <CelebPageRestaurantCard key={id} {...props} />)}
        </ul>
      </main>
    </>
  );
};

export default CelebPage;
