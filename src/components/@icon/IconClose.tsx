import { colors } from '@/constants/colors';

interface IconCloseProps extends React.SVGProps<SVGSVGElement> {}

const IconClose = ({ width = 24, height = 24, fill = colors.gray[700], ...props }: IconCloseProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19 5L5 19M5 5L19 19" stroke={fill} stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
    </svg>
  );
};

export default IconClose;
