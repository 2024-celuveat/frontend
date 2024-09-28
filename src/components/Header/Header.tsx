'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import IconArrowLeft from '../@icon/IconArrowLeft';

function HeaderType1({ title }: { title: string }) {
  const router = useRouter();

  return (
    <div className="relative flex h-[58px] w-full items-center justify-center">
      <IconArrowLeft
        className="top-18 absolute left-20"
        onClick={() => {
          router.back();
        }}
        width={24}
        height={24}
      />
      <h1 className="title-20-bold">{title}</h1>
    </div>
  );
}

function HeaderType2({ title }: { title: string }) {
  return (
    <div className="flex h-[58px] items-center justify-center border-b border-[#00000014]">
      <h1 className="title-20-bold">{title}</h1>
    </div>
  );
}

function Header() {
  const pathname = usePathname();
  const pathValues = pathname?.split('/');
  const searchParams = useSearchParams();

  if (!pathValues) return null;

  if (pathValues[1] === 'celebs') {
    return <HeaderType1 title="맛집 추천 리스트" />;
  }

  if (pathValues[1] === 'my') {
    return <HeaderType2 title="마이" />;
  }

  if (pathValues[1] === 'interested') {
    return <HeaderType2 title="관심" />;
  }

  if (pathValues[1] === 'reviews') {
    if (pathValues[2] === 'review')
      return <HeaderType1 title={searchParams.get('reviewId') ? '리뷰 수정하기' : '리뷰 작성하기'} />;
    if (pathValues[2] === 'my') return <HeaderType1 title="작성한 리뷰" />;
    return <HeaderType1 title="리뷰 더보기" />;
  }

  if (pathValues[1] === 'restaurants') {
    if (pathValues[2] === 'restaurant') return <HeaderType1 title="맛집 정보" />;
    if (pathValues[2] === 'weekly') return <HeaderType1 title="이번 주 업데이트 된 맛집" />;
    return <HeaderType1 title={searchParams.get('category') ?? ''} />;
  }
}

export default Header;
