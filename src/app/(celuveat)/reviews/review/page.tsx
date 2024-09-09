import Image from 'next/image';

import IconBullet from '@/components/@icon/IconBullet';
import IconStarFilled from '@/components/@icon/IconStarFilled';
import ImageInput from '@/components/ImageInput';

function ReviewFormPage() {
  return (
    <main className="flex min-h-[calc(100vh_-_120px)] flex-col justify-evenly gap-20 px-20">
      <section className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-5">
            <span className="text-gray-800 body-14-md">한식</span>
            <IconBullet />
            <span className="text-gray-400 body-14-rg">서울 성수동</span>
          </div>
          <h1 className="text-gray-900 title-22-md">소문난성수감자탕</h1>
        </div>

        <Image
          src="https://jeremy-targaryen.vercel.app/_next/image?url=https%3A%2F%2Fwww.celuveat.com%2Fimages-data%2Fwebp%2FbW9vZ2V1bmJvbi0y.webp&w=1080&q=75"
          alt="소문난성수감자탕"
          width={56}
          height={56}
          className="aspect-square rounded-[6px] object-cover"
        />
      </section>
      <hr className="border-gray-100" />
      <section className="flex flex-col items-center gap-[18px]">
        <h2 className="text-gray-900 title-18-bold">별점을 등록해 주세요</h2>
        <div className="flex">
          <IconStarFilled width={32} height={32} />
          <IconStarFilled width={32} height={32} />
          <IconStarFilled width={32} height={32} />
          <IconStarFilled width={32} height={32} />
          <IconStarFilled width={32} height={32} />
        </div>
      </section>
      <hr className="border-gray-100" />
      <section className="flex flex-col items-center gap-[18px]">
        <h2 className="text-gray-900 title-18-bold">리뷰를 작성해 주세요</h2>
        <textarea
          className="h-[132px] w-full rounded-[8px] bg-gray-50 px-20 py-16 body-14-rg"
          placeholder="리뷰를 보는 사람에게 상처가 되는 욕설, 비방 등의 표현은 삼가해주세요!"
        />
      </section>
      <hr className="border-gray-100" />
      <section className="flex flex-col items-center gap-[18px]">
        <div>
          <h2 className="text-gray-900 title-18-bold">사진을 추가해 주세요</h2>
          <h4 className="text-gray-600 body-14-rg">최대 3장까지 등록할 수 있어요.</h4>
        </div>
        <div className="flex gap-8">
          <ImageInput />
          <ImageInput />
          <ImageInput />
        </div>
      </section>

      <button type="button" className="h-[50px] w-full rounded-[8px] bg-main-600 text-white title-16-sb">
        등록하기
      </button>
    </main>
  );
}

export default ReviewFormPage;
