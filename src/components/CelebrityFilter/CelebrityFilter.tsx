'use client';

import { useSearchParams } from 'next/navigation';

import { useCelebritiesInRestaurantsQuery } from '@/hooks/server/celebs';
import useQueryParams from '@/hooks/useQueryParams';

import Tab from '../Tab';

function CelebrityFilter() {
  const searchParams = useSearchParams();
  const { data: celebrities } = useCelebritiesInRestaurantsQuery({
    category: searchParams.get('category') ?? undefined,
  });
  const { overrideQueryParams, deleteQueryParams } = useQueryParams();

  const onClickTab = (id: number | '전체') => {
    overrideQueryParams([['celebrityId', id.toString()]], { replace: true });
  };

  return (
    <ul className="scrollbar-hide flex gap-6 overflow-scroll">
      <Tab
        label="전체"
        onClick={() => {
          deleteQueryParams('celebrityId', { replace: true });
        }}
        isActive={!searchParams.get('celebrityId')}
      />
      {celebrities.map(({ id, name, profileImageUrl }) => (
        <Tab
          key={id}
          label={name}
          imageUrl={profileImageUrl}
          onClick={() => onClickTab(id)}
          isActive={Number(searchParams.get('celebrityId')) === id}
        />
      ))}
    </ul>
  );
}

export default CelebrityFilter;
