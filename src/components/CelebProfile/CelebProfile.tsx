import Image from 'next/image';
import Link from 'next/link';

interface CelebProfileProps {
  name: string;
  imageUrl: string;
  border?: boolean;

  onClick?: () => void;
}

const CelebProfile = ({ name, imageUrl, border = false, onClick }: CelebProfileProps) => {
  return (
    <div onClick={onClick} className="flex flex-none flex-col items-center gap-[8px]">
      <Image
        className={`rounded-full ${border && 'border-2 border-gray-600'}`}
        src={imageUrl}
        alt={name}
        width={68}
        height={68}
      />
      <span className="body-13-rg">{name}</span>
    </div>
  );
};

export default CelebProfile;
