import { colors } from '@/constants/colors';
import IconStarFilled from '../@icon/IconStarFilled';

interface StarRatingProps {
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="mt-10 flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <IconStarFilled key={index} fill={index < 5 - rating ? colors.sub.orange : colors.gray[200]} />
      ))}
    </div>
  );
};

export default StarRating;
