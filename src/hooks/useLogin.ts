import { useUserProfileQuery } from './server/members';

const useLogin = () => {
  const { data } = useUserProfileQuery();

  return { isLogin: !!data };
};

export default useLogin;
