import CelebrityFilter from '@/components/CelebrityFilter';

import RestaurantSection from './_components/RestaurantSection';

async function RestaurantListPage() {
  return (
    <main className="px-20 py-20">
      <CelebrityFilter />
      <RestaurantSection />
    </main>
  );
}

export default RestaurantListPage;
