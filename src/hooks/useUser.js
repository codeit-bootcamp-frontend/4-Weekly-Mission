import { getUser } from "../api";
import { useState, useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useState({
    email: "",
    image_source: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      const userData = user.data[0];
      setUser(userData);
    };

    fetchUser();
  }, []);

  return user;
};

export default useUser;
