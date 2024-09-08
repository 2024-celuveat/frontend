import Image from 'next/image';

interface AvatarProps {
  imageUrl: string;
  alt: string;
  size: number;
}

function Avatar({ imageUrl, size, alt }: AvatarProps) {
  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={size}
      height={size}
      className="aspect-square flex-none overflow-hidden rounded-full object-cover"
    />
  );
}

export default Avatar;
