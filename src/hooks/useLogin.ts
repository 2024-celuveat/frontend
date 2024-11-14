import { useEffect, useState } from 'react';

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem('accessToken')) {
      setIsLogin(true);
    }
  }, []);

  return { isLogin };
};

export default useLogin;
