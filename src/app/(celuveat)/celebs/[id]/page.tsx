import { getCelebrityInfo } from '@/app/(actions)/celebs/actions';
import { getCelebrityRestaurants } from '@/app/(actions)/restaurants/actions';
import RestaurantCardRow from '@/components/RestaurantCardRow';

import CelebIntroductionSection from './_components/CelebIntroductionSection';

async function CelebPage({ params: { id } }: { params: { id: string } }) {
  const restaurants = await getCelebrityRestaurants(Number(id));
  const celebrityInfo = await getCelebrityInfo(Number(id));

  return (
    <main className="px-20 pt-16">
      <CelebIntroductionSection celebrityInfo={celebrityInfo} />
      <hr className="mt-28 h-1 w-full bg-gray-200" />

      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">{restaurants.contents?.length}개 매장</h2>
        <span className="body-13-rg">최신순</span>
      </div>

      <ul className="mt-24 flex flex-col gap-20">
        {restaurants.contents.map(props => (
          <RestaurantCardRow key={props.id} {...props} />
        ))}
      </ul>
    </main>
  );
}

export default CelebPage;
