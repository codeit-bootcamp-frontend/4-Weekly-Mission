import { User } from '@src/types/common';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface LoginContextValue {
  loginUser: User | null;
  setLoginUser: (user: User) => void;
}

const LoginContext = createContext<LoginContextValue | null>(null);

// 아직 Provider의 역할을 하지 못한다.
// 해당 Context를 통해 하고 싶은 행위는 이렇다.
// localStorage에서 token이 있을 때 api로 token을 검증한다.
// user 검증이 됐다면 자동 로그인과 로그인 상태 유지하기.

// 모든 컴포넌트에서 로그인 상태를 유지하고 싶은 목적으로 생성.
export function LoginProvider({ children }: { children: ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);
  const [loginUser, setLoginUser] = useState<User | null>(null);
  const [time, setTime] = useState(3600);

  const handleAutoLogin = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken || !refreshToken) {
      return;
    }

    /*
      api 검증...
      try {
        const userInfo = await getUser({ accessToken, refreshToken });
        if (!userInfo) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          throw Error('잘못된 경로로 접근하셨습니다.');
        }
        setLoginUser(true);
      } catch (error) {
        console.error(error);
      }
    */
  };

  const handleLogin = (user: User) => {
    setLoginUser(user);
    setIsLogin(true);
    // netlify 배포용...
    console.log(isLogin, time);
    setTime(3600);
  };

  useEffect(() => {
    handleAutoLogin();
  }, [isLogin]);

  return (
    <LoginContext.Provider value={{ loginUser, setLoginUser: handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginUser() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('반드시 LoginProvider 안에서 사용해야 합니다.');
  }
  return context.loginUser;
}

export function useSetLoginUser() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('반드시 LoginProvider 안에서 사용해야 합니다.');
  }
  return context.setLoginUser;
}
