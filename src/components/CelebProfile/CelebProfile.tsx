import Image from 'next/image';
import Link from 'next/link';

interface CelebProfileProps {
  id: number;
  name: string;
  imageUrl: string;
  border?: boolean;
}

const CelebProfile = ({ id, name, imageUrl, border = false }: CelebProfileProps) => {
  return (
    <Link href={`celebs/${id}`} className="flex flex-none flex-col items-center gap-[8px]">
      <Image
        className={`rounded-full ${border && 'border-2 border-gray-600'}`}
        src={imageUrl}
        alt={name}
        width={68}
        height={68}
      />
      <span className="body-13-rg">{name}</span>
    </Link>
  );
};

export default CelebProfile;
