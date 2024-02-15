import FolderProfile from "./FolderProfile";
import { useEffect, useState } from "react";
import useAsync from "./hooks/useAsync";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import { getFolder } from "../api";

export default function MainContents() {
  const [folder, setFolder] = useState({});
  const [loadingFolderError, getFolderAsync] = useAsync(getFolder);
  const [links, setLinks] = useState([]);

  const loadFolder = async () => {
    const result = await getFolderAsync();
    const nextLinks = result?.folder?.links;
    setFolder(result);
    setLinks(nextLinks);
  };

  useEffect(() => {
    loadFolder();
  }, []);

  return (
    <div>
      {loadingFolderError && <p>{loadingFolderError.message}</p>}
      <FolderProfile ownerProfile={folder} loadingError={loadingFolderError} />
      <SearchBar />
      <Cards links={links} />
    </div>
  );
}
