import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./const";
/**
 *
 * @returns {email, id, name, profileImageSource}
 */
export const useProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchGetUser();
  }, []);

  const fetchGetUser = async () => {
    try {
      const fetch = await axios.get(`${API_URL}/sample/user`);
      const { data } = fetch;
      if (data) {
        console.log(data);
        setProfile({ ...data });
      }
    } catch (e) {
      console.log("e");
    }
  };

  return { profile };
};
