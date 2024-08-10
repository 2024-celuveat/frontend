'use client';

import { RestaurantData } from '@/@types';
import Header from '@/components/Header';
import RestaurantCardRow from '@/components/RestaurantCardRow';
import { useState } from 'react';

const mock1: RestaurantData[] = [
  {
    id: 306,
    name: '옥경이네 건생선',
    category: '해물,생선요리',
    roadAddress: '서울 중구 퇴계로85길 7',
    phoneNumber: '02-2233-3494',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/1960119730?c=15,0,0,0,dh',
    viewCount: 11,
    likeCount: 2,
    rating: 4.5,
    distance: 196387,
    celebs: [
      {
        restaurantId: 306,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 306,
        id: 381,
        name: 'a2ltb29ua2FtdWVf7Jil6rK97J2064Sk6rG07IOd7ISgXzE',
        author: '@kimoonkamue',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 306,
        id: 382,
        name: 'a2ltb29ua2FtdWVf7Jil6rK97J2064Sk6rG07IOd7ISgXzI',
        author: '@kimoonkamue',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5660977,
    lng: 127.0195364,
    isLiked: false,
  },
  {
    id: 316,
    name: '방화동 교동짬뽕',
    category: '중식',
    roadAddress: '서울 강서구 금낭화로24나길 21 이루미팰리스 101호',
    phoneNumber: '02-2665-5778',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/35162514?c=15,0,0,0,dh',
    viewCount: 11,
    likeCount: 2,
    rating: 4.0,
    distance: 189845,
    celebs: [
      {
        restaurantId: 316,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 316,
        id: 388,
        name: 'c29vbV90YWJsZV_rsKntmZTrj5kg6rWQ64-Z7Kes672VXzE',
        author: '@soom_table',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 316,
        id: 389,
        name: 'c29vbV90YWJsZV_rsKntmZTrj5kg6rWQ64-Z7Kes672VXzI',
        author: '@soom_table',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 316,
        id: 1392,
        name: 'c29vbV90YWJsZS0x',
        author: '@soom_table',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 316,
        id: 1393,
        name: 'c29vbV90YWJsZS0y',
        author: '@soom_table',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 316,
        id: 1394,
        name: 'c29vbV90YWJsZS0z',
        author: '@soom_table',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5774059,
    lng: 126.8157598,
    isLiked: false,
  },
  {
    id: 318,
    name: '서린낙지',
    category: '냑지요리',
    roadAddress: '서울 종로구 종로 19 르메이에르종로타운1 2층',
    phoneNumber: '02-735-0670',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/11679997?c=15,0,0,0,dh',
    viewCount: 2,
    likeCount: 2,
    rating: 0.0,
    distance: 195262,
    celebs: [
      {
        restaurantId: 318,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 318,
        id: 393,
        name: 'eW91bmNoZW9sam9vX-yEnOumsOuCmeyngF8x',
        author: '@youncheoljoo',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5709593,
    lng: 126.9798759,
    isLiked: false,
  },
  {
    id: 468,
    name: '강남 진해장',
    category: '한식',
    roadAddress: '서울 강남구 테헤란로5길 11',
    phoneNumber: '02-557-2662',
    naverMapUrl: 'https://naver.me/xiv5mYor',
    viewCount: 10,
    likeCount: 2,
    rating: 0.0,
    distance: 190289,
    celebs: [
      {
        restaurantId: 468,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 468,
        id: 596,
        name: 'amVzc2lfZm9vZGxvZy0x',
        author: '@jessi_foodlog',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.4995267,
    lng: 127.0292602,
    isLiked: false,
  },
  {
    id: 485,
    name: '진영면옥',
    category: '냉면',
    roadAddress: '서울 금천구 가산로 22-5',
    phoneNumber: '0507-1367-2383',
    naverMapUrl: 'https://naver.me/IxD7bPNC',
    viewCount: 6,
    likeCount: 2,
    rating: 0.0,
    distance: 182240,
    celebs: [
      {
        restaurantId: 485,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 485,
        id: 648,
        name: 'Y2hhZWNoYWUuXy5zZWFzb24tMQ',
        author: '@chaechae._.season',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 485,
        id: 649,
        name: 'Y2hhZWNoYWUuXy5zZWFzb24tMg',
        author: '@chaechae._.season',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 485,
        id: 650,
        name: 'Y2hhZWNoYWUuXy5zZWFzb24tMw',
        author: '@chaechae._.season',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 485,
        id: 651,
        name: 'Y2hhZWNoYWUuXy5zZWFzb24tNA',
        author: '@chaechae._.season',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.4715619,
    lng: 126.9004013,
    isLiked: false,
  },
  {
    id: 501,
    name: '주은감자탕',
    category: '감자탕',
    roadAddress: '서울 송파구 삼학사로 71',
    phoneNumber: '02-413-3670',
    naverMapUrl: 'https://naver.me/xyUjuZkY',
    viewCount: 37,
    likeCount: 2,
    rating: 0.0,
    distance: 193659,
    celebs: [
      {
        restaurantId: 501,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 501,
        id: 725,
        name: 'bm9pLnZpZGVvLTE',
        author: '@noi.video',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 501,
        id: 1455,
        name: 'MTJfNy5rLTE',
        author: '@12_7.k',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 501,
        id: 1456,
        name: 'MTJfNy5rLTI',
        author: '@12_7.k',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5036812,
    lng: 127.0968157,
    isLiked: false,
  },
  {
    id: 668,
    name: '이남장 삼성점',
    category: '곰탕,설렁탕',
    roadAddress: '서울 강남구 봉은사로108길 21',
    phoneNumber: '02-569-8726',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/33877438?c=15,0,0,0,dh',
    viewCount: 28,
    likeCount: 2,
    rating: 0.0,
    distance: 193178,
    celebs: [
      {
        restaurantId: 668,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 668,
        id: 1451,
        name: 'Z3l1bGlnaHRpbmctMQ',
        author: '@gyulighting',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 668,
        id: 1452,
        name: 'Z3l1bGlnaHRpbmctMg',
        author: '@gyulighting',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5136169,
    lng: 127.0644412,
    isLiked: false,
  },
  {
    id: 304,
    name: '대성집',
    category: '곰탕,설렁탕',
    roadAddress: '서울 종로구 행촌동 209-35',
    phoneNumber: '02-735-4259',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/13517178?c=15,0,0,0,dh',
    viewCount: 1,
    likeCount: 1,
    rating: 0.0,
    distance: 194690,
    celebs: [
      {
        restaurantId: 304,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 304,
        id: 379,
        name: 'a19oeW9fbF_rjIDshLHsp5FfMQ',
        author: '@k_hyo_l',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 304,
        id: 1414,
        name: 'bWF0emlwX2Fobi0x',
        author: '@matzip_ahn',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 304,
        id: 1415,
        name: 'bWF0emlwX2Fobi0y',
        author: '@matzip_ahn',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 304,
        id: 1416,
        name: 'bWF0emlwX2Fobi0z',
        author: '@matzip_ahn',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 304,
        id: 1417,
        name: 'bWF0emlwX2Fobi00',
        author: '@matzip_ahn',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5727172,
    lng: 126.9609577,
    isLiked: false,
  },
  {
    id: 313,
    name: '버거스낵',
    category: '햄버거',
    roadAddress: '서울 용산구 녹사평대로46길 13',
    phoneNumber: '',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/1102024337?c=15,0,0,0,dh',
    viewCount: 5,
    likeCount: 1,
    rating: 0.0,
    distance: 192247,
    celebs: [
      {
        restaurantId: 313,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 313,
        id: 390,
        name: 'dG9nZXRoZXJqanUxMjExX-uyhOqxsOyKpOuCtV8x',
        author: '@togetherjju1211',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 313,
        id: 1410,
        name: 'c2VvdWxfbGlmZV9vZmZpY2lhbC0x',
        author: '@seoul_life_official',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 313,
        id: 1411,
        name: 'c2VvdWxfbGlmZV9vZmZpY2lhbC0y',
        author: '@seoul_life_official',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 313,
        id: 1412,
        name: 'c2VvdWxfbGlmZV9vZmZpY2lhbC0z',
        author: '@seoul_life_official',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 313,
        id: 1413,
        name: 'c2VvdWxfbGlmZV9vZmZpY2lhbC00',
        author: '@seoul_life_official',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5373191,
    lng: 126.9876313,
    isLiked: false,
  },
  {
    id: 317,
    name: '반구정나루터집',
    category: '해물,생선요리',
    roadAddress: '경기 파주시 문산읍 반구정로85번길 13',
    phoneNumber: '031-952-3472',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/11817094?c=15,0,0,0,dh',
    viewCount: 1,
    likeCount: 1,
    rating: 0.0,
    distance: 218226,
    celebs: [
      {
        restaurantId: 317,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 317,
        id: 386,
        name: 'b3Jvc2lfa2l0Y2hlbl9f67CY6rWs7KCV64KY66Oo7YSw7KeRXzE',
        author: '@orosi_kitchen_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 317,
        id: 387,
        name: 'b3Jvc2lfa2l0Y2hlbl9f67CY6rWs7KCV64KY66Oo7YSw7KeRXzI',
        author: '@orosi_kitchen_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 317,
        id: 1395,
        name: 'b3Jvc2lfa2l0Y2hlbl8tMQ',
        author: '@orosi_kitchen_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 317,
        id: 1396,
        name: 'b3Jvc2lfa2l0Y2hlbl8tMg',
        author: '@orosi_kitchen_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 317,
        id: 1397,
        name: 'b3Jvc2lfa2l0Y2hlbl8tMw',
        author: '@orosi_kitchen_',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 317,
        id: 1398,
        name: 'b3Jvc2lfa2l0Y2hlbl8tNA',
        author: '@orosi_kitchen_',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.8683407,
    lng: 126.7516829,
    isLiked: false,
  },
  {
    id: 475,
    name: '첼시스하이볼 청담점',
    category: '바(BAR)',
    roadAddress: '서울 강남구 도산대로85길 14 1층',
    phoneNumber: '0507-1496-1308',
    naverMapUrl: 'https://naver.me/5350SBjo',
    viewCount: 12,
    likeCount: 1,
    rating: 0.0,
    distance: 193662,
    celebs: [
      {
        restaurantId: 475,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 475,
        id: 621,
        name: 'b3pjbGFzc2ljLTE',
        author: '@ozclassic',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 475,
        id: 622,
        name: 'b3pjbGFzc2ljLTI',
        author: '@ozclassic',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 475,
        id: 623,
        name: 'b3pjbGFzc2ljLTM',
        author: '@ozclassic',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 475,
        id: 624,
        name: 'b3pjbGFzc2ljLTQ',
        author: '@ozclassic',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 475,
        id: 625,
        name: 'b3pjbGFzc2ljLTU',
        author: '@ozclassic',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 475,
        id: 626,
        name: 'b3pjbGFzc2ljLTY',
        author: '@ozclassic',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5254355,
    lng: 127.0491972,
    isLiked: false,
  },
  {
    id: 476,
    name: '나진국밥',
    category: '국밥',
    roadAddress: '전남 여수시 화양면 화양로 1391 나진국밥',
    phoneNumber: '061-683-4425',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/19568733?c=15,0,0,0,dh',
    viewCount: 2,
    likeCount: 1,
    rating: 0.0,
    distance: 205128,
    celebs: [
      {
        restaurantId: 476,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 476,
        id: 627,
        name: 'dGhlcmVhbG1haW5kaXNoLTE',
        author: '@therealmaindish',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 34.7068982,
    lng: 127.6132593,
    isLiked: false,
  },
  {
    id: 477,
    name: '복춘식당',
    category: '아귀찜,해물찜',
    roadAddress: '전남 여수시 교동남1길 5-8',
    phoneNumber: '061-662-5260',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/11889051?c=15,0,0,0,dh',
    viewCount: 1,
    likeCount: 1,
    rating: 0.0,
    distance: 210622,
    celebs: [
      {
        restaurantId: 477,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 477,
        id: 628,
        name: 'ZGV6ZXRhcmlhbi0x',
        author: '@dezetarian',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 477,
        id: 629,
        name: 'ZGV6ZXRhcmlhbi0y',
        author: '@dezetarian',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 477,
        id: 630,
        name: 'ZGV6ZXRhcmlhbi0z',
        author: '@dezetarian',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 477,
        id: 1365,
        name: 'cGF1bHdhdWxwYXJrLTE',
        author: '@paulwaulpark',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 477,
        id: 1366,
        name: 'cGF1bHdhdWxwYXJrLTI',
        author: '@paulwaulpark',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 34.7395717,
    lng: 127.7340793,
    isLiked: false,
  },
  {
    id: 478,
    name: '참조은생고기',
    category: '소고기구이',
    roadAddress: '대구 북구 복현로 78',
    phoneNumber: '053-939-9090',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/32481052?c=15,0,0,0,dh',
    viewCount: 4,
    likeCount: 1,
    rating: 0.0,
    distance: 236417,
    celebs: [
      {
        restaurantId: 478,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 478,
        id: 631,
        name: 'am10X2lzLTE',
        author: '@jmt_is',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 35.8985648,
    lng: 128.623471,
    isLiked: false,
  },
  {
    id: 482,
    name: '부흥왕족발',
    category: '족발,보쌈',
    roadAddress: '서울 강남구 도산대로89길 9',
    phoneNumber: '02-546-3727',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/13574818?c=15,0,0,0,dh',
    viewCount: 16,
    likeCount: 1,
    rating: 0.0,
    distance: 193705,
    celebs: [
      {
        restaurantId: 482,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 482,
        id: 638,
        name: 'aGFwcHltaW5fbWstMQ',
        author: '@happymin_mk',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 482,
        id: 639,
        name: 'aGFwcHltaW5fbWstMg',
        author: '@happymin_mk',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 482,
        id: 640,
        name: 'aGFwcHltaW5fbWstMw',
        author: '@happymin_mk',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 482,
        id: 641,
        name: 'aGFwcHltaW5fbWstNA',
        author: '@happymin_mk',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 482,
        id: 642,
        name: 'aGFwcHltaW5fbWstNQ',
        author: '@happymin_mk',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5253041,
    lng: 127.0504943,
    isLiked: false,
  },
  {
    id: 484,
    name: '원조추어탕',
    category: '추어탕',
    roadAddress: '서울 동작구 동작대로33가길 4 석원빌딩',
    phoneNumber: '02-537-9944',
    naverMapUrl: 'https://naver.me/FDQnGWsI',
    viewCount: 2,
    likeCount: 1,
    rating: 0.0,
    distance: 187323,
    celebs: [
      {
        restaurantId: 484,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 484,
        id: 646,
        name: 'c29vX2JpbmlfeWFuZy0x',
        author: '@soo_bini_yang',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 484,
        id: 647,
        name: 'c29vX2JpbmlfeWFuZy0y',
        author: '@soo_bini_yang',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.4896578,
    lng: 126.9818701,
    isLiked: false,
  },
  {
    id: 488,
    name: '홍탁 목포집',
    category: '한식',
    roadAddress: '서울 중구 청구로 86-1',
    phoneNumber: '',
    naverMapUrl: 'https://naver.me/G5rQ9MUf',
    viewCount: 3,
    likeCount: 1,
    rating: 0.0,
    distance: 195580,
    celebs: [
      {
        restaurantId: 488,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 488,
        id: 663,
        name: 'eXVtX3l1bV9oZWVoZWUtMQ',
        author: '@yum_yum_heehee',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 488,
        id: 664,
        name: 'eXVtX3l1bV9oZWVoZWUtMg',
        author: '@yum_yum_heehee',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 488,
        id: 665,
        name: 'eXVtX3l1bV9oZWVoZWUtMw',
        author: '@yum_yum_heehee',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5607045,
    lng: 127.0128025,
    isLiked: false,
  },
  {
    id: 662,
    name: '필동면옥',
    category: '냉면',
    roadAddress: '서울 중구 서애로 26',
    phoneNumber: '02-2266-2611',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/11678838?c=15,0,0,0,dh',
    viewCount: 8,
    likeCount: 1,
    rating: 5.0,
    distance: 194901,
    celebs: [
      {
        restaurantId: 662,
        id: 7,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    images: [
      {
        restaurantId: 662,
        id: 1419,
        name: 'ampvaG5fcS0x',
        author: '@jjohn_q',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 662,
        id: 1420,
        name: 'ampvaG5fcS0y',
        author: '@jjohn_q',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 662,
        id: 1421,
        name: 'ampvaG5fcS0z',
        author: '@jjohn_q',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 662,
        id: 1422,
        name: 'ampvaG5fcS00',
        author: '@jjohn_q',
        sns: 'INSTAGRAM',
      },
      {
        restaurantId: 662,
        id: 1423,
        name: 'ampvaG5fcS01',
        author: '@jjohn_q',
        sns: 'INSTAGRAM',
      },
    ],
    lat: 37.5603956,
    lng: 126.9969204,
    isLiked: false,
  },
];

const InterestedPage = () => {
  const [tab, setTab] = useState<'맛집' | '셀럽'>('맛집');
  return (
    <>
      <Header title="관심" />
      <main className="p-20">
        <div className="flex h-52 rounded-[8px] bg-gray-100 p-4">
          <button
            className={`flex w-1/2 items-center justify-center rounded-[8px] title-16-sb ${tab === '맛집' && 'bg-white'}`}
            onClick={() => setTab('맛집')}
          >
            맛집
          </button>
          <button
            className={`flex w-1/2 items-center justify-center rounded-[8px] title-16-sb ${tab === '셀럽' && 'bg-white'}`}
            onClick={() => setTab('셀럽')}
          >
            셀럽
          </button>
        </div>
        <section className="mt-24">
          {tab === '맛집' && (
            <div className="title-20-md">
              <span className="text-main-700 title-20-bold">00</span>개
              <ul className="mt-16 flex flex-col gap-24">
                {mock1.map((item, index) => (
                  <RestaurantCardRow key={index} {...item} />
                ))}
              </ul>
            </div>
          )}

          {tab === '셀럽' && (
            <div className="title-20-md">
              <span className="text-main-700 title-20-bold">00</span>명
              <ul className="mt-16 flex flex-col gap-24">
                {mock1.map((item, index) => (
                  <li key={index} className="flex items-center gap-10">
                    <div className="h-[56px] w-[56px] rounded-full bg-gray-100" />
                    <div className="flex flex-1 flex-col justify-center">
                      <span className="title-16-sb">성시경 SUNG SI KYUNG</span>
                      <div className="">
                        <span className="body-14-rg">구독자</span>
                        <span className="ml-2 body-14-md">10만명</span>
                        <span className="ml-12 body-14-rg">추천 매장</span>
                        <span className="ml-2 body-14-md">50개</span>
                      </div>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.5 9.3125C22.5 15.875 12.7697 21.1869 12.3553 21.4062C12.2461 21.465 12.124 21.4958 12 21.4958C11.876 21.4958 11.7539 21.465 11.6447 21.4062C11.2303 21.1869 1.5 15.875 1.5 9.3125C1.50174 7.77146 2.11468 6.29404 3.20436 5.20436C4.29404 4.11468 5.77146 3.50174 7.3125 3.5C9.5 3.49753 10.9434 4.3325 12 5.73969C13.0566 4.3325 14.5 3.5 16.6875 3.5C18.2285 3.50174 19.706 4.11468 20.7956 5.20436C21.8853 6.29404 22.4983 7.77146 22.5 9.3125Z"
                        fill="#FF7B54"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default InterestedPage;
