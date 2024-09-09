/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import Image from 'next/image';
import { useState } from 'react';

import { colors } from '@/constants/colors';

import IconPlus from '../@icon/IconPlus';

function ImageInput() {
  const [, setSelectedFile] = useState<File | null>(null);
  const [imgInputBuffer, setImgInputBuffer] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgInputBuffer(reader.result);
      };
    }
  };

  return (
    <div>
      <label
        htmlFor="file"
        className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] bg-gray-50"
      >
        {imgInputBuffer ? (
          <Image src={imgInputBuffer as string} width={100} height={100} alt="이미지 업로드" className="object-cover" />
        ) : (
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white">
            <IconPlus fill={colors.gray[300]} width={24} height={24} />
          </div>
        )}
      </label>
      <input type="file" id="file" className="hidden" onChange={handleFileChange} />
    </div>
  );
}

export default ImageInput;
