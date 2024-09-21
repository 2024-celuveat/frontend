import { SocialLoginType } from './login.type';

export interface UserProfile {
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  serverType: SocialLoginType;
  socialId: string;
  interestedCount: number;
  reviewCount: number;
}
