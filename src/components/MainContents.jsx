import FolderProfile from "./FolderProfile";
import { useEffect, useState } from "react";
import useAsync from "./hooks/useAsync";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import { getFolder } from "../api";
import useFetch from "./hooks/useFetch";
import Loading from "./Loading";

export default function MainContents() {
  // const [folder, setFolder] = useState({});
  // const [loadingFolderError, getFolderAsync] = useAsync(getFolder);
  // const [links, setLinks] = useState([]);

  // const loadFolder = async () => {
  //   const result = await getFolderAsync();
  //   const nextLinks = result?.folder?.links;
  //   setFolder(result);
  //   setLinks(nextLinks);
  // };

  // useEffect(() => {
  //   loadFolder();
  // }, []);
  const folderApi = useFetch(() => getFolder());
  const links = folderApi.data?.folder?.links;

  // return (
  // <div>
  //   {loadingFolderError && <p>{loadingFolderError.message}</p>}
  //   <FolderProfile ownerProfile={folder} loadingError={loadingFolderError} />
  //   <SearchBar />
  //   <Cards links={links} />
  // </div>
  // );

  return (
    <div>
      {folderApi.status === "fetching" && <Loading size="medium" />}
      {folderApi.status === "success" && (
        <FolderProfile ownerProfile={folderApi.data} />
      )}
      {folderApi.status === "error" && <p>{folderApi.error.message}</p>}
      <SearchBar />
      <Cards links={links} />
      {folderApi.status === "fetching" && <Loading size="large" />}
      {folderApi.status === "success" && <Cards links={links} />}
      {folderApi.status === "error" && <p>{folderApi.error.message}</p>}
    </div>
  );
}
