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
        <div className="absolute right-8 top-8 flex h-24 w-24 items-center justify-center rounded-full bg-white">
          <span className="caption-12-rg">찜</span>
        </div>
      </div>
      <div className="mt-12 overflow-x-hidden text-ellipsis whitespace-nowrap">
        <span className="title-15-md">{name}</span>
        <span className="ml-4 caption-12-rg">{category}</span>
      </div>
      <div className="mt-4 flex items-center gap-4 px-4">
        <div className="h-16 w-16 rounded-full bg-gray-200"></div>
        <span className="body-13-rg">{location.split(' ').slice(0, 2).join(' ')}</span>
      </div>
      <div className="mt-8 w-fit bg-gray-200 px-6 py-4">
        <span className="caption-12-rg">{tag}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
