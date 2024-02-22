import { useState, useEffect } from "react";
import api from "../utils/api";

const useGetUser = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    avatar: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await api("sample/user");
      setUserInfo(() => ({
        email: result.email,
        avatar: result.profileImageSource,
      }));
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { userInfo, isLoading };
};

export default useGetUser;
