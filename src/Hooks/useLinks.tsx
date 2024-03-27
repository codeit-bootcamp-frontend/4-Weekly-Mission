import { useEffect, useState } from "react";
import { getLinkData, LinkData } from "../API/FolderPageApi";

interface UseLinksResult {
  link: LinkData[];
  fetchLinks: (id?: string) => void;
}

export const useLinks = (): UseLinksResult => {
  const [link, setLink] = useState<LinkData[]>([]);

  const fetchLinks = async (id?: string): Promise<void> => {
    try {
      const links = await getLinkData(id);
      setLink(links);
      console.log("links:", links);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return { link, fetchLinks };
};
