import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { folderType } from "../types/folderTypes";
import { API_URL } from "./const";

export const useFolder = () => {
  const [folder, setFolder] = useState<null | folderType>(null);

  useEffect(() => {
    fetchGetFolder();
  }, []);

  const fetchGetFolder = async (): Promise<void> => {
    try {
      const fetch: AxiosResponse<{ folder: folderType }> = await axios.get(
        `${API_URL}/sample/folder`
      );
      const { data } = fetch;
      if (data) {
        const {
          folder: { id, name, owner, links },
        } = data;
        setFolder({ id, name, owner, links });
      }
    } catch (e) {
      console.error("e");
    }
  };

  return { folder };
};
