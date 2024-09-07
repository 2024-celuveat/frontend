import Image from 'next/image';

interface AvatarProps {
  imageUrl: string;
  alt: string;
  size: number;
}

const Avatar = ({ imageUrl, size, alt }: AvatarProps) => {
  return (
    <div className={`h-[${size}px] w-[${size}px] flex-none overflow-hidden rounded-full`}>
      <Image src={imageUrl} alt={alt} width={size} height={size} />
    </div>
  );
};

export default Avatar;
