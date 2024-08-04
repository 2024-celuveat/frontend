import { IconGoodFilled12, IconHeartEmpty24 } from '@/assets/icons';
import Image from 'next/image';

interface RestaurantCardProps {
  name: string;
  category: string;
  imageUrl: string;
  location: string;
  tag: string;
}

const RestaurantCard = ({ name, category, imageUrl, location, tag }: RestaurantCardProps) => {
  return (
    <div className="flex w-[140px] flex-none flex-col">
      <div className="relative h-[140px] w-full overflow-hidden rounded-[8px] bg-gray-200">
        <Image src={imageUrl} fill alt={name} sizes="100%" className="object-cover" />
        <IconHeartEmpty24 className="absolute right-8 top-8 *:fill-white" />
      </div>
      <div className="mt-12 overflow-x-hidden text-ellipsis whitespace-nowrap">
        <span className="title-15-md">{name}</span>
        <span className="ml-4 caption-12-rg">{category}</span>
      </div>
      <span className="mt-4 body-13-rg">{location.split(' ').slice(0, 2).join(' ')}</span>
      <div className="mt-8 flex w-fit items-center gap-2 rounded-[3px] bg-[#FFB26C38] px-6 py-4">
        <IconGoodFilled12 />
        <span className="text-main-700 caption-12-rg">{tag}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
