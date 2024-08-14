import { getCelebrityRestaurants } from '@/api';
import RestaurantCardRow from '@/components/RestaurantCardRow';

const CelebPage = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await getCelebrityRestaurants(Number(id));

  return (
    <main className="px-20 pt-16">
      {/* <CelebIntroductionSection celebId={Number(id)} /> */}
      <hr className="mt-28 h-1 w-full bg-gray-200" />

      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">{data.contents?.length}개 매장</h2>
        <span className="body-13-rg">최신순</span>
      </div>

      <ul className="mt-24 flex flex-col gap-20">
        {data.contents?.map(props => <RestaurantCardRow key={id} {...props} />)}
      </ul>
    </main>
  );
};

export default CelebPage;
