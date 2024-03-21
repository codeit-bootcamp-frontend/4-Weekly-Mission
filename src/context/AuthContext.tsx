import { createContext, useEffect, useState } from 'react';
import { UserType } from '../types/types';

export const AuthContext = createContext<{
  user: UserType | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | null | undefined>>;
}>({
  user: null,
  setUser: () => {
    return;
  }
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null | undefined>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return <AuthContext.Provider value={{ user, setUser }}> {children} </AuthContext.Provider>;
};
