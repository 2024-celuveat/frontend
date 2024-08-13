import { Restaurant } from '@/@types';
import CelebIntroductionSection from '@/components/CelebIntroductionSection';
import RestaurantCardRow from '@/components/RestaurantCardRow';

const getCelebsRestaurants = async (celebId: number): Promise<{ content: Restaurant[] }> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/restaurants?lowLatitude=32&highLatitude=40&lowLongitude=120&highLongitude=132&sort=like&celebId=${celebId}&page=0`,
  );
  return response.json();
};

const CelebPage = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await getCelebsRestaurants(Number(id));

  return (
    <main className="px-20 pt-16">
      <CelebIntroductionSection celebId={Number(id)} />
      <hr className="mt-28 h-1 w-full bg-gray-200" />

      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">{data.content?.length}개 매장</h2>
        <span className="body-13-rg">최신순</span>
      </div>

      <ul className="mt-24 flex flex-col gap-20">
        {data.content?.map(props => <RestaurantCardRow key={id} {...props} />)}
      </ul>
    </main>
  );
};

export default CelebPage;
