import { colors } from '@/constants/colors';

const IconPlus = ({ width = 24, height = 24, fill = colors.gray[800] }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4V20M4 12H20" stroke={fill} stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
    </svg>
  );
};

export default IconPlus;