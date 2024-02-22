import { useState, useEffect } from "react";
import api from "../utils/api";

const useGetUser = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await api("sample/user");
      setUserEmail(result.email);
      setUserAvatar(result.profileImageSource);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { userEmail, userAvatar, isLoading };
};

export default useGetUser;
