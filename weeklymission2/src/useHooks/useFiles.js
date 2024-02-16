import { useEffect, useState } from "react";
import { getFolderName, getLinkData } from "../APIs/FolderPageApi";

export const useFiles = () => {
  // const [files, setFiles] = useState([]);

  // const fetchFile = async () => {
  //   const links = await getLinkData();
  //   setFiles(links);
  // };

  // useEffect(() => {
  //   fetchFile();
  // }, []);

  // return {
  //   files,
  // };
  const [folder, setFolder] = useState([]);

  const fetchFile = async () => {
    const { data } = await getFolderName();
    setFolder(data);
  };

  useEffect(() => {
    fetchFile();
  }, []);

  return folder;
};
