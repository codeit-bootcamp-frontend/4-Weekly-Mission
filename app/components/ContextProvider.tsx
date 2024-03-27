import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getSharedUserSample } from "@/util/api";
import { UseUserProfile, UserProps } from "@/types/UserProps";
import { USER_INITIAL_VALUE } from "@/util/statucValue";

const Context = createContext<UserProps>(USER_INITIAL_VALUE);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState(USER_INITIAL_VALUE);

  const handleSharedUserProfile = async () => {
    const result = await getSharedUserSample();
    if (!result) return;

    const { id, email, image_source } = result.data[0];
    setUserProfile({ id, email, image_source });
  };

  useEffect(() => {
    handleSharedUserProfile();
  }, []);
  return <Context.Provider value={userProfile}>{children}</Context.Provider>;
};

export const useUserProfile: UseUserProfile = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("ContextProvider 안에서만 사용할 수 있습니다.");
  }
  return context;
};
