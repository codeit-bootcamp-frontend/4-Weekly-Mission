import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";

export const useGetUser = async () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axiosInstance.get("sample/user").then((response) => { 
      console.log(response.data);
      setUser(response.data);
    });
  }, []);
  return user;
}
