import { getCelebrityRestaurants } from '@/api';
import CelebIntroductionSection from '@/components/CelebIntroductionSection';
import CelebRestaurantList from '@/components/CelebRestaurantList';

const CelebPage = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await getCelebrityRestaurants(Number(id));

  return (
    <main className="px-20 pt-16">
      <CelebIntroductionSection celebId={Number(id)} />
      <hr className="mt-28 h-1 w-full bg-gray-200" />

      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">{data.contents?.length}개 매장</h2>
        <span className="body-13-rg">최신순</span>
      </div>

      <CelebRestaurantList celebId={Number(id)} />
    </main>
  );
};

export default CelebPage;
