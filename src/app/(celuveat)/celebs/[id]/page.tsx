import { getCelebrityInfo } from '@/app/(actions)/celebs/actions';
import { getCelebrityRestaurantsCount } from '@/app/(actions)/restaurants/actions';

import CelebIntroductionSection from './_components/CelebIntroductionSection';
import CelebRestaurantSections from './_components/CelebRestaurantSections';

async function CelebPage({ params: { id } }: { params: { id: string } }) {
  const celebrityInfoData = await getCelebrityInfo(Number(id));
  const getCelebrityRestaurantsCountData = await getCelebrityRestaurantsCount(Number(id));

  const [celebrityInfo, celebrityRestaurantsCount] = await Promise.all([
    celebrityInfoData,
    getCelebrityRestaurantsCountData,
  ]);

  return (
    <main className="px-20 pt-16">
      <CelebIntroductionSection celebrityInfo={celebrityInfo} />
      <hr className="mt-28 h-1 w-full bg-gray-200" />
      <CelebRestaurantSections celebrityRestaurantsCount={celebrityRestaurantsCount} celebrityId={Number(id)} />
    </main>
  );
}

export default CelebPage;
