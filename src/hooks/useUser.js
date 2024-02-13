import { getUser } from "../api";
import { useState, useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  return user;
};

export default useUser;
