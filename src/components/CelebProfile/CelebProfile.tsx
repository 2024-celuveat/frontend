import Image from 'next/image';

interface CelebProfileProps {
  name: string;
  imageUrl: string;
  border?: boolean;
}

const CelebProfile = ({
  name,
  imageUrl,
  border = false,
}: CelebProfileProps) => {
  return (
    <div className='flex flex-col items-center gap-[8px] min-w-[68px]'>
      <Image
        className={`rounded-full ${border && 'border-2 border-gray-600'}`}
        src={imageUrl}
        alt={name}
        width={68}
        height={68}
      />
      <span className='body-13-rg'>{name}</span>
    </div>
  );
};

export default CelebProfile;
