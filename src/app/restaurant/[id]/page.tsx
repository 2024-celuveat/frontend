import { IconArrowRight14, IconHeartEmpty24, IconPlus20 } from '@/assets/icons';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

const mock = [
  {
    id: 311,
    name: '소문난성수감자탕',
    category: '감자탕',
    roadAddress: '서울 성동구 연무장길 45',
    phoneNumber: '02-465-6580',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/11721256?c=15,0,0,0,dh',
    viewCount: 1254,
    likeCount: 117,
    rating: 4.5,
    celebs: [
      {
        restaurantId: 311,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 311,
        id: 304,
        name: 'X25ld19qaW1f7IaM66y464Kc7ISx7IiY6rCQ7J6Q7YOVXzE',
        author: '@_new_jim',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 311,
        id: 1384,
        name: 'X25ld19qaW0tMQ',
        author: '@_new_jim',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5428851,
    lng: 127.0544297,
    isLiked: false,
  },
  {
    id: 469,
    name: '발산한우진곱창',
    category: '곱창,막창,양',
    roadAddress: '서울 강서구 강서로 395 1층 109~110호',
    phoneNumber: '02-2668-7776',
    naverMapUrl: 'https://naver.me/FFvSGnJg',
    viewCount: 396,
    likeCount: 21,
    rating: 0.0,
    celebs: [
      {
        restaurantId: 469,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 469,
        id: 597,
        name: 'bXVrenppX29uZS0x',
        author: '@mukzzi_one',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 598,
        name: 'bXVrenppX29uZS0y',
        author: '@mukzzi_one',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 599,
        name: 'bXVrenppX29uZS0z',
        author: '@mukzzi_one',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 600,
        name: 'bXVrenppX29uZS00',
        author: '@mukzzi_one',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 601,
        name: 'bXVrenppX29uZS01',
        author: '@mukzzi_one',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 602,
        name: 'bXVrenppX29uZS02',
        author: '@mukzzi_one',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 603,
        name: 'bXVrenppX29uZS03',
        author: '@mukzzi_one',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 604,
        name: 'bXVrenppX29uZS04',
        author: '@mukzzi_one',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 1367,
        name: 'eWFtbWlfMTcyLTE',
        author: '@yammi_172',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 469,
        id: 1368,
        name: 'eWFtbWlfMTcyLTI',
        author: '@yammi_172',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5610369,
    lng: 126.8385843,
    isLiked: false,
  },
  {
    id: 470,
    name: '진미평양냉면',
    category: '냉면',
    roadAddress: '서울 강남구 학동로 305-3',
    phoneNumber: '02-515-3469',
    naverMapUrl: 'https://naver.me/xw69Cb5o',
    viewCount: 256,
    likeCount: 9,
    rating: 0.0,
    celebs: [
      {
        restaurantId: 470,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 470,
        id: 605,
        name: 'anVkb3Jhbl8tMQ',
        author: '@judoran_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 470,
        id: 606,
        name: 'anVkb3Jhbl8tMg',
        author: '@judoran_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 470,
        id: 607,
        name: 'anVkb3Jhbl8tMw',
        author: '@judoran_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 470,
        id: 608,
        name: 'anVkb3Jhbl8tNA',
        author: '@judoran_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 470,
        id: 609,
        name: 'anVkb3Jhbl8tNQ',
        author: '@judoran_',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5161614,
    lng: 127.036033,
    isLiked: false,
  },
  {
    id: 506,
    name: '무근본',
    category: '바(BAR)',
    roadAddress: '서울 성동구 성수일로8길 40-1 1층 105호',
    phoneNumber: '',
    naverMapUrl: 'https://naver.me/G7KOrpYK',
    viewCount: 333,
    likeCount: 25,
    rating: 0.0,
    celebs: [
      {
        restaurantId: 506,
        id: 10,
        name: '빅페이스',
        youtubeChannelName: '@bigfacetv',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ytc/AOPolaTCwJ_nAk7CRvRT5S6fL7pfYse6O7IZeANzxGamDQ=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 506,
        id: 734,
        name: 'bW9vZ2V1bmJvbi0y',
        author: '@moogeunbon',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 506,
        id: 735,
        name: 'bW9vZ2V1bmJvbi0x',
        author: '@moogeunbon',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 506,
        id: 736,
        name: 'bW9vZ2V1bmJvbi0z',
        author: '@moogeunbon',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 506,
        id: 737,
        name: 'bW9vZ2V1bmJvbi00',
        author: '@moogeunbon',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 506,
        id: 738,
        name: 'bW9vZ2V1bmJvbi01',
        author: '@moogeunbon',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 506,
        id: 739,
        name: 'bW9vZ2V1bmJvbi02',
        author: '@moogeunbon',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5454325,
    lng: 127.0547234,
    isLiked: false,
  },
  {
    id: 513,
    name: '대막',
    category: '일식당',
    roadAddress: '서울 강남구 압구정로46길 75 , 1층',
    phoneNumber: '0507-1403-5056',
    naverMapUrl: 'https://naver.me/FFviHZGz',
    viewCount: 109,
    likeCount: 2,
    rating: 0.0,
    celebs: [
      {
        restaurantId: 513,
        id: 10,
        name: '빅페이스',
        youtubeChannelName: '@bigfacetv',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ytc/AOPolaTCwJ_nAk7CRvRT5S6fL7pfYse6O7IZeANzxGamDQ=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 513,
        id: 764,
        name: 'Zm9vZGllamFuaWVlZS0x',
        author: '@foodiejanieee',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 513,
        id: 765,
        name: 'Zm9vZGllamFuaWVlZS0y',
        author: '@foodiejanieee',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 513,
        id: 766,
        name: 'Zm9vZGllamFuaWVlZS0z',
        author: '@foodiejanieee',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 513,
        id: 767,
        name: 'ZWF0X3N0YWdyYW1qLTE',
        author: '@eat_stagramj',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 513,
        id: 768,
        name: 'ZWF0X3N0YWdyYW1qLTI',
        author: '@eat_stagramj',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 513,
        id: 769,
        name: 'ZWF0X3N0YWdyYW1qLTM',
        author: '@eat_stagramj',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 513,
        id: 770,
        name: 'ZWF0X3N0YWdyYW1qLTQ',
        author: '@eat_stagramj',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 513,
        id: 771,
        name: 'ZWF0X3N0YWdyYW1qLTU',
        author: '@eat_stagramj',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5238303,
    lng: 127.0367102,
    isLiked: false,
  },
  {
    id: 525,
    name: '올디스타코',
    category: '멕시코,남미음식',
    roadAddress: '서울 중구 충무로4길 3',
    phoneNumber: '',
    naverMapUrl: 'https://naver.me/GvXgnZvR',
    viewCount: 79,
    likeCount: 5,
    rating: 0.0,
    celebs: [
      {
        restaurantId: 525,
        id: 11,
        name: '홍석천이원일',
        youtubeChannelName: '@gaypig1111',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ALEqZi9aeCfyxCfmNEJGf0CXpbkabeMFNACcyD53j7GwFmC5qPgbRS5xStq67KDmfPVclMsK=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 525,
        id: 808,
        name: 'b2xkaWVzdGFjby0x',
        author: '@oldiestaco',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 525,
        id: 809,
        name: 'b2xkaWVzdGFjby0y',
        author: '@oldiestaco',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 525,
        id: 810,
        name: 'b2xkaWVzdGFjby0z',
        author: '@oldiestaco',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 525,
        id: 811,
        name: 'b2xkaWVzdGFjby00',
        author: '@oldiestaco',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 525,
        id: 812,
        name: 'b2xkaWVzdGFjby01',
        author: '@oldiestaco',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5651105,
    lng: 126.9929827,
    isLiked: false,
  },
  {
    id: 535,
    name: '농민백암순대',
    category: '순대,순댓국',
    roadAddress: '서울 강남구 선릉로86길 40-4',
    phoneNumber: '02-555-9603',
    naverMapUrl: 'https://naver.me/xGOiXFfS',
    viewCount: 133,
    likeCount: 16,
    rating: 4.8,
    celebs: [
      {
        restaurantId: 535,
        id: 11,
        name: '홍석천이원일',
        youtubeChannelName: '@gaypig1111',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ALEqZi9aeCfyxCfmNEJGf0CXpbkabeMFNACcyD53j7GwFmC5qPgbRS5xStq67KDmfPVclMsK=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 535,
        id: 859,
        name: 'Y2VsdXZlYXQtMQ',
        author: '@celuveat',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5037129,
    lng: 127.0530043,
    isLiked: false,
  },
  {
    id: 680,
    name: '블루메베이글',
    category: '베이커리',
    roadAddress: '제주 제주시 가령로4길 3 1층',
    phoneNumber: '0507-1445-3444',
    naverMapUrl: 'https://naver.me/Gyeylsf3',
    viewCount: 65,
    likeCount: 3,
    rating: 0.0,
    celebs: [
      {
        restaurantId: 680,
        id: 9,
        name: '핫둘제주',
        youtubeChannelName: '@hot2_jeju',
        profileImageUrl:
          'https://yt3.googleusercontent.com/1dfMVQ10pcdZrxVexr_xkfT2mWhpq-7Cy-u48auoE1Vc0cuGvq4jKjqPLB3eFIEO1WtoUvDaxQ=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 680,
        id: 1521,
        name: 'Ymx1bWVfYmFnZWwtMQ',
        author: '@blume_bagel',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 680,
        id: 1522,
        name: 'Ymx1bWVfYmFnZWwtMg',
        author: '@blume_bagel',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 680,
        id: 1523,
        name: 'Ymx1bWVfYmFnZWwtMw',
        author: '@blume_bagel',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 680,
        id: 1524,
        name: 'Ymx1bWVfYmFnZWwtNA',
        author: '@blume_bagel',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 680,
        id: 1525,
        name: 'Ymx1bWVfYmFnZWwtNQ',
        author: '@blume_bagel',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 33.4967164,
    lng: 126.5331297,
    isLiked: false,
  },
  {
    id: 698,
    name: '그동네떡볶이',
    category: '종합분식',
    roadAddress: '서울 마포구 와우산로27길 14 그동네떡볶이',
    phoneNumber: '0507-1362-5414',
    naverMapUrl: 'https://naver.me/5tjeOb7E',
    viewCount: 107,
    likeCount: 27,
    rating: 0.0,
    celebs: [
      {
        restaurantId: 698,
        id: 11,
        name: '홍석천이원일',
        youtubeChannelName: '@gaypig1111',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ALEqZi9aeCfyxCfmNEJGf0CXpbkabeMFNACcyD53j7GwFmC5qPgbRS5xStq67KDmfPVclMsK=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 698,
        id: 1622,
        name: 'aGtmb29kaWVfeXVtXzFfQ3dScTFmOUJsSmU',
        author: '@hkfoodie_yum',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 698,
        id: 1623,
        name: 'aGtmb29kaWVfeXVtXzJfQ3dScTFmOUJsSmU',
        author: '@hkfoodie_yum',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 698,
        id: 1624,
        name: 'aGtmb29kaWVfeXVtXzNfQ3dScTFmOUJsSmU',
        author: '@hkfoodie_yum',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 698,
        id: 1625,
        name: 'aGtmb29kaWVfeXVtXzRfQ3dScTFmOUJsSmU',
        author: '@hkfoodie_yum',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5540663,
    lng: 126.9275134,
    isLiked: false,
  },
  {
    id: 712,
    name: '무탄',
    category: '중식당',
    roadAddress: '서울 강남구 논현로176길 22 1층',
    phoneNumber: '02-549-9339',
    naverMapUrl: 'https://naver.me/FgivzDWH',
    viewCount: 50,
    likeCount: 1,
    rating: 0.0,
    celebs: [
      {
        restaurantId: 712,
        id: 12,
        name: '먹보스쮸엽이',
        youtubeChannelName: '@mukboss_jjooyup',
        profileImageUrl:
          'https://yt3.googleusercontent.com/9MdHU3Mfpz_R3aUrxzDI570ca9TimJPoC0ZU-PB1y-ti--apQOdQGW9huode8yod9KvjMPNw=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 712,
        id: 1681,
        name: 'YmlubmFfcmlfNF9Dd2UtRy0ydXNZQw',
        author: '@binna_ri',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 712,
        id: 1682,
        name: 'YmlubmFfcmlfMl9Dd2UtRy0ydXNZQw',
        author: '@binna_ri',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 712,
        id: 1683,
        name: 'YmlubmFfcmlfM19Dd2UtRy0ydXNZQw',
        author: '@binna_ri',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 712,
        id: 1684,
        name: 'YmlubmFfcmlfMV9Dd2UtRy0ydXNZQw',
        author: '@binna_ri',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5272745,
    lng: 127.0303366,
    isLiked: false,
  },
];

const RestaurantDetailPage = () => {
  return (
    <div>
      <Header title="맛집 정보" />
      <div className="h-[240px] w-full bg-gray-200" />
      <main className="relative bottom-16 rounded-t-[16px] bg-white p-20">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-gray-800 body-14-md">한식</span>
              <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" fill="#BEBEC0" />
              </svg>
              <span className="text-gray-600 body-14-rg">서울 성수동</span>
            </div>
            <h1 className="mt-4 title-22-md">소문난성수감자탕</h1>
            <div className="mt-8 flex items-center gap-4">
              <Image
                className="rounded-full"
                width={24}
                height={24}
                alt="성시경"
                src="https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj"
              />
              <p className="body-13-rg">
                <span className="text-main-700 border-b-mainDim-15 border-b-[5px]">성시경</span>이 추천한 맛집
              </p>
            </div>
          </div>
          <Image
            className="h-72 rounded-[8px] object-cover"
            width={72}
            height={72}
            alt="소문난성수감자탕"
            src="https://www.celuveat.com/images-data/webp/X25ld19qaW1f7IaM66y464Kc7ISx7IiY6rCQ7J6Q7YOVXzE.webp"
          />
        </div>
        <p className="mt-14 body-13-rg">
          식당 소개글 가나다라마바사아자차카타파하 가나다라마바 최대 2줄 노출 후 말줄임 처리하기... 식당 소개글
          가나다라마바사아자차카타파하 가나다라마바 최대 2줄 노출 후 말줄임 처리하기...
        </p>

        <div className="mt-20 flex h-[44px] gap-10">
          <button className="flex h-full flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12">
            <IconPlus20 />
            <span className="text-main-700 title-15-md">관심 추가</span>
          </button>
          <button className="h-full flex-1 rounded-[8px] bg-gray-100 py-12 text-gray-700 title-15-md">
            네이버 지도로 보기
          </button>
        </div>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        <h2 className="mt-24 title-20-md">영상으로 보기</h2>
        <iframe className="mt-16 h-[240px] w-full rounded-[8px]" src="https://www.youtube.com/embed/MAIrp4WYAx4" />
        <div className="mt-16 flex justify-between">
          <div className="flex items-center gap-8">
            <Image
              className="rounded-full"
              width={32}
              height={32}
              alt="성시경"
              src="https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj"
            />
            <span className="text-gray-900 body-16-md">성시경</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 body-14-rg">추천 맛집</span>
              <span className="text-gray-600 body-14-md">50개</span>
            </div>
            <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1" cy="1" r="1" fill="#BEBEC0" />
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 body-14-rg">구독자</span>
              <span className="text-gray-600 body-14-md">194만명</span>
            </div>
          </div>
        </div>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        <section>
          <div className="mt-24 flex items-center justify-between">
            <h2 className="title-20-md">리뷰 00개</h2>
            <button className="flex items-center">
              <span className="text-gray-400 body-13-rg">더보기</span>
              <IconArrowRight14 />
            </button>
          </div>

          <ul className="mt-16 flex flex-col">
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="h-[25px] w-[25px] rounded-full bg-gray-100" />
                  <span className="text-gray-900 title-16-sb">셀럽잇</span>
                  <span className="text-gray-400 caption-12-rg">2022.05.18</span>
                </div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7Z"
                    fill="#909097"
                  />
                  <path
                    d="M12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14Z"
                    fill="#909097"
                  />
                  <path
                    d="M12 21C12.8284 21 13.5 20.3284 13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21Z"
                    fill="#909097"
                  />
                </svg>
              </div>

              <div className="mt-10 flex gap-1">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
                    fill="#FF7B54"
                  />
                </svg>
              </div>

              <p className="mt-12 text-gray-900 body-13-rg">
                유저 리뷰 내용 최대 3줄 노출 후 말줄임 처리 가나다라마바사아자차카타파하 유저 리뷰 내용 최대 3줄 노출 후
                말줄임 처리 가나다라마바사아자차카타파하 유저 리뷰 내용 최대 3줄 노출 후 말줄임 처리
                가나다라마바사아자차카타파하
              </p>

              <div className="mt-14 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 caption-12-rg">조회수</span>
                  <span className="caption-12-md text-gray-600">58</span>
                </div>
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1" r="1" fill="#BEBEC0" />
                </svg>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 caption-12-rg">도움되요</span>
                  <span className="caption-12-md text-gray-600">100</span>
                </div>
              </div>

              <button className="mt-14 flex items-center gap-2 rounded-[6px] border border-gray-200 p-8">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.21428 2.15708C7.78311 3.43987 6.95008 4.5132 6.05241 5.34181C5.12676 6.19625 4.10696 6.81417 3.31799 7.15075C3.20355 7.19958 3.1524 7.29455 3.1524 7.36757V13.5133H11.3782L13.3358 7.3609L9.58837 7.36091C9.0359 7.36092 8.65754 6.83339 8.79392 6.32069C9.28655 4.4687 9.20744 3.38745 8.96621 2.80552C8.77682 2.34864 8.48503 2.18536 8.21428 2.15708ZM9.77971 6.38948C10.2442 4.55775 10.2146 3.28038 9.8636 2.43353C9.48186 1.51263 8.73592 1.14677 8.02675 1.18353C7.64816 1.20316 7.40825 1.4849 7.32617 1.74689C6.97352 2.87246 6.23731 3.84912 5.39352 4.62799C4.54992 5.40669 3.62416 5.964 2.93681 6.25724C2.51285 6.4381 2.18097 6.85526 2.18097 7.36757V13.6657C2.18097 14.118 2.54767 14.4847 3.00002 14.4847H11.4896C11.8463 14.4847 12.162 14.2539 12.2701 13.914L14.3246 7.45686C14.4927 6.92862 14.0985 6.38947 13.5442 6.38947L9.77971 6.38948Z"
                    fill="#BEBEC0"
                  />
                </svg>
                <span className="text-gray-600 caption-12-rg">도움되요!</span>
              </button>
            </li>
          </ul>
          <button className="bg-mainDim-15 text-main-700 mt-24 h-[50px] w-full rounded-[8px] title-16-sb">
            방문 리뷰 남기기
          </button>
        </section>

        <hr className="height-1 mt-24 w-full bg-gray-100" />

        <section className="mt-24">
          <h2 className="title-20-md">주변 식당 둘러보기</h2>
          <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll">
            {mock.map(({ id, name, category, images, roadAddress }) => (
              <Link key={id} className="flex w-[140px] flex-none flex-col" href={`/restaurant/${name}`}>
                <div className="relative h-[140px] w-full overflow-hidden rounded-[8px] bg-gray-200">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
                    fill
                    alt={name}
                    sizes="100%"
                    className="object-cover"
                  />
                  <IconHeartEmpty24 className="absolute right-8 top-8 *:fill-white" />
                </div>
                <div className="mt-12 overflow-x-hidden text-ellipsis whitespace-nowrap">
                  <span className="title-15-md">{name}</span>
                  <span className="ml-4 caption-12-rg">{category}</span>
                </div>
                <span className="mt-4 overflow-x-hidden text-ellipsis whitespace-nowrap body-13-rg">{roadAddress}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantDetailPage;
