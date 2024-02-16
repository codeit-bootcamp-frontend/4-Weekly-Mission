import { useEffect, useState } from "react";
import { getLinkData } from "../APIs/FolderPageApi";

export const useFolder = () => {
  const [folder, setFolder] = useState([]);

  const fetchFolder = async (id) => {
    const links = await getLinkData(id);
    setFolder(links.data);
    console.log(`links: ${links}`);
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return { folder, fetchFolder };
};
