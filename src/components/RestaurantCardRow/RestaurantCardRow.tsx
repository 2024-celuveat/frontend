import Image from 'next/image';
import Link from 'next/link';

import { Restaurant } from '@/@types';

import RestaurantLikeButton from '../RestaurantLikeButton';

function RestaurantCardRow({ id, name, images, category, roadAddress, liked }: Restaurant) {
  return (
    <div className="relative">
      <Link href={`/restaurants/restaurant/${id}`} className="flex gap-12">
        <div className="relative h-[112px] w-[112px] overflow-hidden rounded-[8px] bg-gray-200">
          <Image src={images[0].url} fill alt={name} sizes="100%" className="object-cover" />
        </div>
        <div className="relative flex flex-1 flex-col">
          <h3 className="mt-2 w-4/5 title-16-sb">{name}</h3>
          <span className="mt-4 text-gray-400 caption-12-rg">{category}</span>
          <span className="text-gray-800 body-13-rg">{roadAddress}</span>

          <p className="absolute bottom-0 left-0 text-gray-600 body-13-rg">식당 소개글 가나다라마바사아자차타파...</p>
        </div>
      </Link>
      <RestaurantLikeButton liked={liked} restaurantId={id} isRow />
    </div>
  );
}

export default RestaurantCardRow;
