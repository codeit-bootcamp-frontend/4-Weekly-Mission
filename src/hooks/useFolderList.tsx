import { useEffect, useState } from "react";
import { API_URL } from "./const";
import axios, { AxiosResponse } from "axios";
import { folderListType, folderListDataType } from "../types/folderListTypes";

export const useFolderList = (id: number | null) => {
  const [list, setList] = useState<folderListDataType[]>([]);

  const fetchList = async (): Promise<void> => {
    try {
      const apiUrl = id
        ? `${API_URL}/users/1/links?folderId=${id}`
        : `${API_URL}/users/1/links`;
      const fetch: AxiosResponse<folderListType> = await axios.get(apiUrl);
      const { data } = fetch;
      if (data) {
        // console.log("DATA", data);
        setList([...data?.data]);
      }
    } catch (e) {
      console.error("e", e);
    }
  };

  useEffect(() => {
    fetchList();
  }, [id]);

  return { list };
};
