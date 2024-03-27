import { useEffect, useState } from "react";
import { getFolderById } from "../APIs/FolderPageApi";

export type Link = {
  id: number;
  image_source: string;
  created_at: number;
  description: string;
  url: string;
  title: string;
};

export const useLinks = () => {
  const [links, setLinks] = useState<Link[]>([]);

  const fetchAllLinks = async () => {
    const { data } = await getFolderById();
    setLinks(data);
  };

  const fetchLinkById = async (id?: number) => {
    const { data } = await getFolderById(id);
    setLinks(data);
  };

  const handleLinks = (id?: number) => {
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
