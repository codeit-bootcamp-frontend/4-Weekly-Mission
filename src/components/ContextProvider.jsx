import { createContext, useContext, useEffect, useState } from "react";
import { getSharedUserSample } from "./util/api";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  const handleSharedUserProfile = async () => {
    const result = await getSharedUserSample();
    if (!result) return;

    const { id, email, image_source } = result.data[0];
    setUserProfile({ id, email, image_source });
  };

  useEffect(() => {
    handleSharedUserProfile();
  }, []);
  return (
    <Context.Provider value={{ userProfile }}>{children}</Context.Provider>
  );
};

export const useUserProfile = () => {
  return useContext(Context);
};
