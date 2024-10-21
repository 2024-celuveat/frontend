'use client';

import { getCelebritiesInRestaurants } from '@/app/(actions)/celebs/actions';
import useQueryParams from '@/hooks/useQueryParams';

import Tab from '../Tab';

function CelebrityFilter({ celebrities }: { celebrities: Awaited<ReturnType<typeof getCelebritiesInRestaurants>> }) {
  const { searchParams, overrideQueryParams, deleteQueryParams } = useQueryParams();

  const onClickTab = (id: number | '전체') => {
    overrideQueryParams([['celebrityId', id.toString()]]);
  };

  return (
    <ul className="scrollbar-hide flex gap-6 overflow-scroll">
      <Tab
        label="전체"
        onClick={() => {
          deleteQueryParams('celebrityId');
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
