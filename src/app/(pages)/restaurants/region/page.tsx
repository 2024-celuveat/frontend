import NaverMap from '@/components/NaverMap';

import RestaurantListSection from './_components/RestaurantListSection';

async function RestaurantListPage() {
  return (
    <main className="flex h-[calc(100vh-146px)] flex-col">
      <NaverMap cn="h-[300px]" />
      <RestaurantListSection />
    </main>
  );
}

export default RestaurantListPage;
