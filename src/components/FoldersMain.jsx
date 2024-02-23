import { useState } from "react";
import { getFolders, getLinksInFolder } from "../api";
import FoldersCatagory from "./FoldersCatagory";
import FoldersLinks from "./FoldersLinks";
import useFetch from "./hooks/useFetch";
import Loading from "./Loading";
import NoLinkSection from "./NoLinkSection";

function FoldersMain() {
  const folderApi = useFetch(() => getFolders());
  const foldersInfo = folderApi?.data?.data;
  const [headFolder, setHeadFolder] = useState({});

  const folderId = headFolder?.id ? headFolder.id : null;
  const linksApi = useFetch(() => getLinksInFolder(folderId));
  const links = linksApi?.data?.data;
  const linkCount = links?.length;

  const handleButtonClick = (nextHeadFolder) => {
    setHeadFolder(nextHeadFolder);
    linksApi.setEvent(true);
  };

  return (
    <div>
      {folderApi.status === "fetching" && <Loading size="medium" />}
      {folderApi.status === "success" && (
        <FoldersCatagory
          headFolder={headFolder}
          data={foldersInfo}
          onClick={handleButtonClick}
        />
      )}
      {folderApi.status === "error" && <p>{folderApi.error.message}</p>}
      {linksApi.status === "idle" && <NoLinkSection />}
      {linksApi.status === "fetching" && <Loading size="large" />}
      {linksApi.status === "success" &&
        (linkCount ? <FoldersLinks links={links} /> : <NoLinkSection />)}
      {linksApi.status === "error" && <p>{linksApi.error.message}</p>}
    </div>
  );
}
export default FoldersMain;
