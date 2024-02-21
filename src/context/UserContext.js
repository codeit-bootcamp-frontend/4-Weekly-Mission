import { createContext, useContext, useState, useEffect } from "react";
import { getUser } from "../api";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUserData() {
      try {
        const result = await getUser();
        setUser(result);
      } catch (error) {
        alert(error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.user;
}

export function useSetUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.setUser;
}
