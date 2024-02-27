import { useEffect, useState } from "react";
import { getAllLinks, getFolderById } from "../APIs/FolderPageApi";

export const useLinks = () => {
  const [links, setLinks] = useState([]);

  const fetchAllLinks = async () => {
    const { data } = await getAllLinks();
    setLinks(data);
  };

  const fetchLinkById = async (id) => {
    const { data } = await getFolderById(id);
    setLinks(data);
  };

  const handleLinks = (id) => {
    if (id) {
      fetchLinkById(id);
    } else {
      fetchAllLinks();
    }
  };

  useEffect(() => {
    fetchAllLinks();
  }, []);

  return {
    handleLinks,
    links,
  };
};
