import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./const";

export const useFavoriteList = () => {
  const [favoriteList, setFavoriteList] = useState(null);

  useEffect(() => {
    fetchGetFolder();
  }, []);

  const fetchGetFolder = async () => {
    try {
      const fetch = await axios.get(`${API_URL}/users/1/folders`);
      const { data } = fetch;
      if (data) {
        console.log("data", data);
        const { data: favoriteList } = data;
        setFavoriteList([...favoriteList]);
      }
    } catch (e) {
      console.error();
    }
  };

  return { favoriteList };
};
