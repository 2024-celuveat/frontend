import { getRestaurants, getRestaurantsCount } from '@/app/(actions)/restaurants/actions';
import RestaurantCardRow from '@/components/RestaurantCardRow';

async function RestaurantListPage({ searchParams }: { searchParams: { category: string } }) {
  const restaurantsData = await getRestaurants({ category: searchParams.category, page: 0, size: 10, sort: [] });
  const restaurantsCountData = await getRestaurantsCount({
    category: searchParams.category,
  });

  const [restaurants, restaurantsCount] = await Promise.all([restaurantsData, restaurantsCountData]);

  return (
    <main className="px-20">
      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">{restaurantsCount}개 매장</h2>
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

export default RestaurantListPage;
