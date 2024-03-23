import { useEffect, useState } from "react";
import axios from "axios";
import { folderType } from "../types/folderTypes";
import { API_URL } from "./const";

export const useFolder = () => {
  const [folder, setFolder] = useState<null | folderType>(null);
  useEffect(() => {
    fetchGetFolder();
  }, []);

  const fetchGetFolder = async () => {
    try {
      const fetch = await axios.get(`${API_URL}/sample/folder`);
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
