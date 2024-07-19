interface RestaurantCardProps {
  name: string;
  category: string;
  imageUrl: string;
  location: string;
  tag: string;
}

const RestaurantCard = ({
  name,
  category,
  imageUrl,
  location,
  tag,
}: RestaurantCardProps) => {
  return (
    <div className='w-[140px] flex flex-col flex-none'>
      <div className='relative w-full h-[140px] rounded-[8px] bg-gray-200'>
        <div className='absolute right-8 top-8 flex justify-center items-center w-24 h-24 rounded-full bg-white'>
          <span className='caption-12-rg'>찜</span>
        </div>
      </div>
      <div className='mt-12 px-4'>
        <span className='title-15-md'>{name}</span>
        <span className='caption-12-rg ml-4'>{category}</span>
      </div>
      <div className='mt-4 px-4 flex items-center gap-4'>
        <div className='w-16 h-16 rounded-full bg-gray-200'></div>
        <span className='body-13-rg'>{location}</span>
      </div>
      <div className='w-fit mt-8 bg-gray-200 px-6 py-4'>
        <span className='caption-12-rg'>{tag}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
