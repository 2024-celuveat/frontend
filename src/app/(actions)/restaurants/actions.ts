'use server';

import { revalidateTag } from 'next/cache';

import { Celebrity, Restaurant } from '@/@types';
import { PagedResponse } from '@/@types/util';
import { TAGS } from '@/constants/tags';
import { api } from '@/utils/api';

type CoordinateOption = {
  lowLongitude: number;
  highLongitude: number;
  lowLatitude: number;
  highLatitude: number;
};

type FilterOption = {
  region?: string;
  category?: string;
};

type PaginationOption = {
  page?: number;
  size?: number;
  sort?: string[];
};

// 음식점 조건 조회
export const getRestaurants = async (
  options: FilterOption & PaginationOption & (CoordinateOption | {}),
): Promise<PagedResponse<Restaurant>> => {
  const params = Object.entries(options).map(([key, value]) => [key, `${value}`]);
  return await api(`/restaurants?${new URLSearchParams(params)}`, {
    next: { tags: [TAGS.TYPE.RESTAURANT] },
  });
};

// 음식점 갯수 조회
export const getRestaurantsCount = async (
  options: FilterOption & PaginationOption & (CoordinateOption | {}),
): Promise<number> => {
  const params = Object.entries(options).map(([key, value]) => [key, `${value}`]);
  return await api(`/restaurants/count?${new URLSearchParams(params)}`, {
    next: { tags: [TAGS.TYPE.RESTAURANT] },
  });
};

// 인기 셀럽 조회
export const getCelebritiesBest = async (): Promise<
  {
    celebrity: Celebrity;
    restaurants: Restaurant[];
  }[]
> => {
  return await api('/celebrities/best', {
    next: { tags: [TAGS.TYPE.RESTAURANT] },
  });
};

// 셀럽 추천 음식점 조회
export const getRecommendedRestaurantsByCelebrities = async (): Promise<Restaurant[]> => {
  return await api('/restaurants/celebrity/recommend', { next: { tags: [TAGS.TYPE.RESTAURANT] } });
};

// 관심 음식점 조회
export const getInterestedRestaurants = async (): Promise<PagedResponse<Restaurant>> => {
  return await api('/restaurants/interested', { next: { tags: [TAGS.TYPE.RESTAURANT] } });
};

// 관심 음식점 갯수 조회
export const getInterestedRestaurantsCount = async (): Promise<number> => {
  return await api('/restaurants/interested/count', { next: { tags: [TAGS.TYPE.RESTAURANT] } });
};

// 셀럽이 다녀간 음식점 조회
export const getCelebrityRestaurants = async (celebrityId: number): Promise<PagedResponse<Restaurant>> => {
  return await api(`/restaurants/celebrity/${celebrityId}`, {
    next: { tags: [TAGS.TYPE.RESTAURANT] },
  });
};

// 관심 음식점 추가
export const postInterestedRestaurant = async (restaurantId: number) => {
  await api(`/restaurants/interested/${restaurantId}`, { method: 'POST' });

  revalidateTag(TAGS.TYPE.RESTAURANT);
};

// 관심 음식점 삭제
export const deleteInterestedRestaurant = async (restaurantId: number) => {
  await api(`/restaurants/interested/${restaurantId}`, { method: 'DELETE' });

  revalidateTag(TAGS.TYPE.RESTAURANT);
};

// 음식점 조회
export const getRestaurant = async (restaurantId: number): Promise<Restaurant> => {
  return await api(`/restaurants/${restaurantId}`, { next: { tags: [TAGS.TYPE.RESTAURANT] } });
};

// 음식점이 나온 영상 조회
export const getRestaurantVideos = async (
  restaurantId: number,
): Promise<
  {
    id: number;
    videoUrl: string;
    celebrities: Celebrity[];
  }[]
> => {
  return await api(`/videos/in/restaurants/${restaurantId}`);
};

// 주변 음식점 조회
export const getRestaurantsNearby = async (restaurantId: number): Promise<Restaurant[]> => {
  return await api(`/restaurants/nearby/${restaurantId}`, {
    next: { tags: [TAGS.TYPE.RESTAURANT] },
  });
};

// 주간 업데이트된 음식점 조회
export const getWeeklyRestaurants = async (): Promise<PagedResponse<Restaurant>> => {
  return await api('/restaurants/weekly', { next: { tags: [TAGS.TYPE.RESTAURANT] } });
};

// 주간 음식점 갯수 조회
export const getWeeklyRestaurantsCount = async (): Promise<number> => {
  return await api('/restaurants/weekly/count', { next: { tags: [TAGS.TYPE.RESTAURANT] } });
};
