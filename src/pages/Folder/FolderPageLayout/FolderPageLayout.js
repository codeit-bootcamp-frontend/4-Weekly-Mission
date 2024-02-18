import FolderList from "../../../component/FolderList/FolderList";
import LinkAddInput from "../../../component/LinkAddInput/LinkAddInput";
import LinkSearchInput from "../../../component/LinkSearchInput/LinkSearchInput";
import { useEffect, useState } from "react";
import { getFolderList, getLinkData } from "../../../apis/api";
import FolderName from "./FolderName";
import LinkItems from "../../../component/LinkItems/LinkItems";

const FolderPageLayout = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("전체");
  const [folderId, setFolderId] = useState(null);
  const [links, setLinks] = useState([]);

  const handleClick = (e) => {
    setSelectedFolder(e.target.innerText);
  };

  useEffect(() => {
    const folderInfo = folders.filter(
      (item) => item.name === selectedFolder
    )[0];
    setFolderId(folderInfo?.id);

    const getData = async () => {
      try {
        const { data } = await getFolderList();
        setFolders(data);
        const { data: linkData } = await getLinkData(folderId);
        setLinks(linkData);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [selectedFolder, folderId]);

  return (
    <>
      <LinkAddInput />
      <LinkSearchInput />
      <FolderList
        list={folders}
        selectedFolderId={folderId}
        selectedFolder={selectedFolder}
        onClick={handleClick}
      />
      {selectedFolder && <FolderName>{selectedFolder}</FolderName>}
      {links.length > 0 ? (
        <LinkItems links={links} />
      ) : (
        <p>저장된 링크가 없습니다.</p>
      )}
    </>
  );
};

export default FolderPageLayout;
