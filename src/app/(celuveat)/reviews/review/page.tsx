import Image from 'next/image';

import IconBullet from '@/components/@icon/IconBullet';
import ReviewForm from './_components/ReviewForm';

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
      <ReviewForm />
    </main>
  );
}

export default ReviewFormPage;
