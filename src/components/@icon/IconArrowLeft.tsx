import { colors } from '@/constants/colors';

interface IconArrowProps extends React.SVGProps<SVGSVGElement> {}

const IconArrowLeft = ({ width = 24, height = 24, fill = colors.gray[300] }: IconArrowProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 19.5L7 12L15 4.5" stroke={fill} stroke-width="1.5" stroke-linecap="square" />
    </svg>
  );
};

export default IconArrowLeft;
