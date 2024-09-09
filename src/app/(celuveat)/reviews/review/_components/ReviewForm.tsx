'use client';

import { useState } from 'react';

import IconStarFilled from '@/components/@icon/IconStarFilled';
import ImageInput from '@/components/ImageInput';
import { colors } from '@/constants/colors';

const RATING = [1, 2, 3, 4, 5] as const;

function ReviewForm() {
  const [currentRating, setCurrentRating] = useState(0);

  const handleRating = (value: number) => {
    setCurrentRating(value);
  };

  return (
    <>
      <section className="flex flex-col items-center gap-[18px]">
        <h2 className="text-gray-900 title-18-bold">별점을 등록해 주세요</h2>
        <div className="flex">
          {RATING.map(rating => (
            <IconStarFilled
              width={32}
              height={32}
              onClick={() => handleRating(rating)}
              fill={rating <= currentRating ? colors.sub.yellow : colors.gray[200]}
            />
          ))}
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
    </>
  );
}

export default ReviewForm;
