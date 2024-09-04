import { getRestaurants } from '@/app/(actions)/restaurants/actions';
import RestaurantCardRow from '@/components/RestaurantCardRow';

const CategorizedRestaurantListPage = async ({ params }: { params: { category: string } }) => {
  const restaurants = await getRestaurants({ category: params.category, page: 0, size: 10, sort: [] });

  return (
    <main className="px-20 pt-16">
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
};

export default CategorizedRestaurantListPage;
