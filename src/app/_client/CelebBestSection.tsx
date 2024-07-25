'use client';

import CelebProfile from '@/components/CelebProfile';
import Link from 'next/link';
import { useState } from 'react';

const IMAGE_URL =
  'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj';

const CELEBS = [
  {
    id: 7,
    name: '성시경',
    youtubeChannelName: '@sungsikyung',
    profileImageUrl:
      'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 11,
    name: '홍석천이원일',
    youtubeChannelName: '@gaypig1111',
    profileImageUrl:
      'https://yt3.googleusercontent.com/ALEqZi9aeCfyxCfmNEJGf0CXpbkabeMFNACcyD53j7GwFmC5qPgbRS5xStq67KDmfPVclMsK=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 13,
    name: '또간집',
    youtubeChannelName: '@STUDIO_SUZE',
    profileImageUrl:
      'https://yt3.googleusercontent.com/ytc/APkrFKanwG55M-jYZzbjKPMHLjRMpgiPZRL9wtR0T7MDQQ=s176-c-k-c0x00ffffff-no-rj',
  },

  {
    id: 4,
    name: '마리아주',
    youtubeChannelName: '@mariage_in',
    profileImageUrl:
      'https://yt3.googleusercontent.com/TJcuv5nlJKaZQBi3mbuuqOvBVzAlE-UdBR_bNgChy4_q-G43o5UUPXquvGCYx8Q6bze-8I253w=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 5,
    name: '김사원세끼',
    youtubeChannelName: '@kim3meals',
    profileImageUrl:
      'https://yt3.googleusercontent.com/ytc/AOPolaQnS9nKQFCtkBihMKt1Jhm-nzkUFY3Z6RQpwnbf=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 8,
    name: '백종원',
    youtubeChannelName: '@paik_jongwon',
    profileImageUrl:
      'https://yt3.googleusercontent.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s176-c-k-c0x00ffffff-no-rj',
  },

  {
    id: 12,
    name: '먹보스쮸엽이',
    youtubeChannelName: '@mukboss_jjooyup',
    profileImageUrl:
      'https://yt3.googleusercontent.com/9MdHU3Mfpz_R3aUrxzDI570ca9TimJPoC0ZU-PB1y-ti--apQOdQGW9huode8yod9KvjMPNw=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 15,
    name: '최자로드',
    youtubeChannelName: '@thebobstudiooffcial',
    profileImageUrl:
      'https://yt3.googleusercontent.com/h2LcPbyx1Y8LowtWTKNKbc7a_4FV8i2baCP3YjCHp5S5UoBVF1wr4XX03DMn8EjfvtS5yUztuw=s176-c-k-c0x00ffffff-no-rj',
  },
];

const CelebBestSectionRestaurantCard = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="w-full rounded-[8px] bg-gray-200 after:block after:pb-[100%] after:content-['']"></div>
      <div className="mt-10 flex flex-col gap-3 px-2">
        <span className="body-14-md">올디스 타코</span>
        <span className="text-[11px] text-gray-600">음식 종류</span>
      </div>
      <div className="mt-8 flex items-center gap-2">
        <div className="h-16 w-16 rounded-full bg-gray-200"></div>
        <span className="caption-12-rg">서울시 광진구</span>
      </div>
    </div>
  );
};

const CelebBestSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="mt-28">
      <h1 className="px-20 title-20-md">셀럽 BEST</h1>
      <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
        {CELEBS.map(({ id, name, profileImageUrl }) => (
          <CelebProfile
            key={id}
            name={name}
            imageUrl={profileImageUrl}
            border={selected === name}
            onClick={() => {
              setSelected(prev => (prev === name ? null : name));
            }}
          />
        ))}
      </div>
      {selected && (
        <div className="mt-16 bg-gray-100 px-20 py-20">
          <div className="flex w-full gap-8">
            <CelebBestSectionRestaurantCard />
            <CelebBestSectionRestaurantCard />
            <CelebBestSectionRestaurantCard />
          </div>
          <Link
            href={`/celebs/${CELEBS.find(({ name }) => name === selected)?.id}`}
            className="mt-20 flex h-48 w-full items-center justify-center gap-8 rounded-[8px] bg-white"
          >
            <span className="body-16-md">셀럽 맛집 더보기</span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CelebBestSection;
