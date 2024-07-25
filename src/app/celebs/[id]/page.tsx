import Header from '@/components/Header';

const CelebPageRestaurantCard = () => {
  return (
    <li className="flex gap-12">
      <div className="h-[112px] w-[112px] rounded-[8px] bg-dim-5"></div>
      <div className="relative flex flex-1 flex-col">
        <h3 className="mt-2 title-16-sb">식당 이름</h3>
        <span className="mt-4 text-gray-400 caption-12-rg">음식 종류</span>
        <span className="text-gray-800 body-13-rg">서울 성동구 연무장길</span>

        <p className="absolute bottom-0 left-0 text-gray-600 body-13-rg">식당 소개글 가나다라마바사아자차타파...</p>
      </div>
    </li>
  );
};

const CelebPage = () => {
  return (
    <>
      <Header title="성시경 추천 리스트" />
      <main className="px-20 pt-16">
        <div className="flex">
          <div className="flex-1">
            <span className="title-22-md">셀럽 이름</span>
            <div className="mt-6 flex items-center">
              <span className="body-14-rg">구독자</span>
              <span className="ml-2 body-14-md">10만명</span>
              <span className="ml-12 body-14-rg">추천 매장</span>
              <span className="ml-2 body-14-md">50개</span>
            </div>
            <p className="mt-14 pr-16 body-13-rg">
              셀럽 소개글 가나다라마바사아자차카타파하 가나다라마바 최대 2줄 노출 후 말줄임 처리하기...셀럽 소개글
              가나다라마바사아자차카타파하 가나다라마바 최대 2줄 노출 후 말줄임 처리하기...
            </p>
          </div>
          <div className="h-72 w-72 flex-none rounded-full bg-gray-100"></div>
        </div>

        <div className="mt-20 flex gap-10">
          <button className="flex-1 rounded-[8px] bg-gray-100 py-12 title-15-md">찜</button>
          <button className="flex-1 rounded-[8px] bg-gray-100 py-12 title-15-md">유튜브</button>
        </div>

        <hr className="mt-28 h-1 w-full bg-gray-200" />

        <div className="mt-28 flex justify-between">
          <h2 className="title-20-md">10개 매장</h2>
          <span className="body-13-rg">최신순</span>
        </div>

        <ul className="mt-24 flex flex-col gap-20">
          <CelebPageRestaurantCard />
          <CelebPageRestaurantCard />
          <CelebPageRestaurantCard />
          <CelebPageRestaurantCard />
          <CelebPageRestaurantCard />
        </ul>
      </main>
    </>
  );
};

export default CelebPage;
