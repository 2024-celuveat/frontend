import CelebIntroductionSection from './_components/CelebIntroductionSection';
import CelebRestaurantSections from './_components/CelebRestaurantSections';

async function CelebPage({ params }: { params: { id: string } }) {
  return (
    <main className="px-20 pt-16">
      <CelebIntroductionSection celebrityId={Number(params.id)} />
      <hr className="mt-28 h-1 w-full bg-gray-200" />
      <CelebRestaurantSections celebrityId={Number(params.id)} />
    </main>
  );
}

export default CelebPage;
