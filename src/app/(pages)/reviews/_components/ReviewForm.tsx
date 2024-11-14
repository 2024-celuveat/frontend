'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useCallback, ChangeEvent } from 'react';
import { useFormStatus } from 'react-dom';

import IconPlus from '@/components/@icon/IconPlus';
import IconStarFilled from '@/components/@icon/IconStarFilled';
import { colors } from '@/constants/colors';
import { Review } from '@/remotes/reviews';

const RATING = [1, 2, 3, 4, 5] as const;

interface ReviewFormProps {
  restaurantId: string;
  review: Review | null;
}

function ReviewForm({ restaurantId, review }: ReviewFormProps) {
  const [star, setStar] = useState<Review['star']>(review?.star || 0);
  const [content, setContent] = useState<Review['content']>(review?.content || '');
  const [images, setImages] = useState<Review['images']>(review?.images || []);
  const { pending } = useFormStatus();
  const submitDisabled = star === 0 || content.length < 1;

  const handleRating = useCallback((value: Review['star']) => {
    setStar(value);
  }, []);

  const handleChangeComment = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const map = Array.from(files).map(file => {
      const getUploadedFileName = async () => {
        const response = await fetch(`/api/presigned-url?file=reviews/${file.name}`);
        const { presignedUrl } = await response.json();
        const { ok } = await fetch(presignedUrl, { body: file, method: 'PUT' });

        if (!ok) throw new Error('Failed to upload image');
        return `${process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/${file.name}`;
      };

      return getUploadedFileName();
    });

    const arr = await Promise.all(map);

    setImages(arr);
  };

  return (
    <>
      <input type="hidden" name="restaurantId" value={restaurantId} />
      <section className="mt-20 flex flex-col items-center gap-[18px]">
        <input type="hidden" name="star" value={star} required />
        <h2 className="text-gray-900 title-18-bold">별점을 등록해 주세요</h2>
        <div className="flex">
          {RATING.map(rating => (
            <IconStarFilled
              width={32}
              height={32}
              onClick={() => handleRating(rating)}
              fill={rating <= star ? colors.sub.yellow : colors.gray[200]}
            />
          ))}
        </div>
      </section>
      <hr className="mt-20 border-gray-100" />
      <section className="mt-20 flex flex-col items-center gap-[18px]">
        <h2 className="text-gray-900 title-18-bold">리뷰를 작성해 주세요</h2>
        <textarea
          name="content"
          value={content}
          onChange={handleChangeComment}
          className="h-[132px] w-full rounded-[8px] bg-gray-50 px-20 py-16 body-14-rg"
          placeholder="리뷰를 보는 사람에게 상처가 되는 욕설, 비방 등의 표현은 삼가해주세요! "
        />
      </section>
      <hr className="mt-20 border-gray-100" />
      <section className="mt-20 flex flex-col items-center gap-[18px]">
        <div>
          <h2 className="text-gray-900 title-18-bold">사진을 추가해 주세요</h2>
          <h4 className="text-gray-600 body-14-rg">최대 3장까지 등록할 수 있어요.</h4>
        </div>
        <div className="flex gap-8">
          {images.map(img => (
            <label
              htmlFor="file"
              className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] bg-gray-50"
            >
              <Image key={img} src={img} width={100} height={100} alt="이미지 업로드" className="object-cover" />
              <input type="hidden" name="images" value={img} required />
              <input type="file" id="file" className="hidden" onChange={handleFileChange} multiple />
            </label>
          ))}
          {images.length < 3 && (
            <div>
              <label
                htmlFor="file"
                className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] bg-gray-50"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white">
                  <IconPlus fill={colors.gray[300]} width={24} height={24} />
                </div>
                <input type="file" id="file" className="hidden" onChange={handleFileChange} multiple max={3} />
              </label>
            </div>
          )}
        </div>
      </section>
      <AnimatePresence>
        <button
          disabled={submitDisabled || pending}
          type="submit"
          className="mt-20 h-[50px] w-full rounded-[8px] bg-main-600 text-white title-16-sb disabled:bg-gray-200"
        >
          {!pending ? (
            <motion.div key={1} animate={{ x: 0 }} exit={{ x: +300 }}>
              등록하기
            </motion.div>
          ) : (
            <motion.div
              key={2}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -300, opacity: 0 }}
              exit={{ x: -300, opacity: 0 }}
            >
              등록중이에요! 잠시만 기다려주세요.
            </motion.div>
          )}
        </button>
      </AnimatePresence>
    </>
  );
}

export default ReviewForm;
