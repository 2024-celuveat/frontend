import IconStarFilled from '@/components/@icon/IconStarFilled';
import { colors } from '@/constants/colors';

interface StarRatingProps {
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="mt-10 flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <IconStarFilled key={index} fill={index < 5 - rating ? colors.sub.orange : colors.gray[200]} />
      ))}
    </div>
  );
}

export default StarRating;
