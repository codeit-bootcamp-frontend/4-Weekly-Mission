import { useEffect, useState } from "react";
import { API_URL } from "./const";
import axios from "axios";
export const useFolderList = (id) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const apiUrl = id
        ? `${API_URL}/users/1/links?folderId=${id}`
        : `${API_URL}/users/1/links`;
      const fetch = await axios.get(apiUrl);
      const { data } = fetch;
      if (data) {
        console.log("DATA", data);
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
