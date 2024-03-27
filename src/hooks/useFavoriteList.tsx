import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "./const";
import { favoriteListDataType } from "../types/folderListTypes";

export const useFavoriteList = () => {
  const [favoriteList, setFavoriteList] = useState<favoriteListDataType[]>([]);

  useEffect(() => {
    fetchGetFolder();
  }, []);

  const fetchGetFolder = async (): Promise<void> => {
    try {
      const fetch: AxiosResponse<{ data: favoriteListDataType[] }> =
        await axios.get(`${API_URL}/users/1/folders`);

      const { data } = fetch;
      if (data) {
        const { data: favoriteList } = data;
        setFavoriteList([...favoriteList]);
      }
    } catch (e) {
      console.error();
    }
  };

  return { favoriteList };
};
