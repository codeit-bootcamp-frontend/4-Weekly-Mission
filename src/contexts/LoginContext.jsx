import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [tile, setTime] = useState(3600);

  const handleLogin = (user) => {
    setUser(user);
    setIsLogin(true);
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
