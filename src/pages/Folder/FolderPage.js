import FolderList from "../../component/FolderList";
import LinkAddInput from "../../component/LinkAddInput";
import LinkSearchInput from "../../component/LinkSearchInput";
import { useEffect, useState } from "react";
import { getFolderList, getLinkData } from "../../apis/api";
import FolderName from "./FolderName";
import LinkItems from "../../component/LinkItems";

const ALL = {
  id: "ALL",
  name: "전체",
  favorite: false,
};

const FolderPage = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(ALL);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [links, setLinks] = useState([]);

  const handleClick = (e) => {
    setSelectedFolderId(e.target.id);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getFolderList();
        setFolders([ALL, ...data]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (selectedFolderId === "") return;
    const findFolder = folders.find(
      (item) => String(item.id) === selectedFolderId
    );

    setSelectedFolder(findFolder);
  }, [selectedFolderId]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getLinkData(selectedFolderId);
        setLinks(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [selectedFolderId]);

  console.log(links);

  return (
    <>
      <LinkAddInput />
      <LinkSearchInput />
      <FolderList
        folders={folders}
        selectedFolderId={selectedFolder.id}
        onClick={handleClick}
      />
      <FolderName>{selectedFolder?.name}</FolderName>
      {links?.length > 0 ? (
        <LinkItems links={links} />
      ) : (
        <p>저장된 링크가 없습니다.</p>
      )}
    </>
  );
};

export default FolderPage;
