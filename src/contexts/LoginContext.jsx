import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

// 아직 Provider의 역할을 하지 못한다.
// 해당 Context를 통해 하고 싶은 행위는 이렇다.
// localStorage에서 token이 있을 때 api로 token을 검증한다.
// user 검증이 됐다면 자동 로그인과 로그인 상태 유지하기.

// 모든 컴포넌트에서 로그인 상태를 유지하고 싶은 목적으로 생성.
export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [time, setTime] = useState(3600);

  const handleLogin = (user) => {
    setUser(user);
    setIsLogin(true);
    // netlify 배포용...
    console.log(isLogin, time);
    setTime(3600);
  };

  return (
    <LoginContext.Provider value={{ user, setUser: handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useUser() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('반드시 LoginProvider 안에서 사용해야 합니다.');
  }
  return context.user;
}

export function useSetUser() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('반드시 LoginProvider 안에서 사용해야 합니다.');
  }
  return context.setUser;
}
