import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { getToken, getUserProfile, updateUserProfile } from '@/remotes/members';

// 유저 프로필 조회
export const useUserProfileQuery = () =>
  useSuspenseQuery({
    queryKey: ['getUserProfile'],
    queryFn: getUserProfile,
  });

// 유저 프로필 수정
export const useUpdateUserProfileMutation = () =>
  useMutation({
    mutationFn: updateUserProfile,
  });

// 토큰 조회
export const useTokenQuery = (params: Parameters<typeof getToken>[0]) =>
  useSuspenseQuery({
    queryKey: ['getToken'],
    queryFn: () => getToken(params),
  });
