import IconCaution from '@/components/@icon/iconCaution';

function MyReviewsPage() {
  return (
    <main className="h-full">
      <div className="flex h-[90vh] flex-col items-center justify-center">
        <IconCaution width={64} height={64} />
        <span className="mt-20 text-gray-900 title-18-bold">등록된 리뷰가 없습니다</span>
        <span className="mt-8 text-gray-600 body-13-rg">방문한 맛집의 리뷰를 등록해보세요.</span>
      </div>
    </main>
  );
}

export default MyReviewsPage;
