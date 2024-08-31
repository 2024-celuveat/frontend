import { colors } from '@/constants/colors';

const IconCheck = ({ width = 24, height = 24, fill = colors.gray[300] }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke={fill} stroke-width="1.5" stroke-linecap="square" />
    </svg>
  );
};

export default IconCheck;
