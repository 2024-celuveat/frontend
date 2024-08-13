import Image from 'next/image';

interface CelebProfileProps {
  name: string;
  imageUrl: string;
  outlined?: boolean;

  onClick?: () => void;
}

const CelebProfile = ({ name, imageUrl, outlined = false, onClick }: CelebProfileProps) => {
  return (
    <div onClick={onClick} className="relative flex flex-none flex-col items-center gap-[8px]">
      <Image
        className={`h-[68px] rounded-full object-cover ${outlined && 'outline outline-[3px] outline-main-500 after:ballon'}`}
        src={imageUrl}
        alt={name}
        width={68}
        height={68}
        priority
      />
      {outlined && <div className="ballon"></div>}
    </div>
  );
};

export default CelebProfile;
