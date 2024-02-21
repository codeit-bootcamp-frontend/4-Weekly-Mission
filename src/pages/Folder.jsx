import { getFolderListData, getWholeFolderListData } from "../api/api";
import { useEffect, useState } from "react";
import CardBox from "../components/CardBox";
import SearchBar from "../components/SearchBar";
import FolderListBar from "../components/FolderListBar";
import EmptyFolder from "../components/EmptyFolder";

function Folder() {
  const [folderList, setFolderList] = useState([]);
  const [linksData, setLinksData] = useState([]);

  const getFolderList = async () => {
    try {
      const folderListData = await getFolderListData();
      const { data } = folderListData;
      setFolderList(data);
    } catch (err) {
      console.error(err);
      setFolderList([]);
    }
  };

  const getLinks = async (folderId) => {
    try {
      console.log("folderId: ", folderId);
      const linksData = await getWholeFolderListData(folderId);
      const { data } = linksData;
      setLinksData(data);
    } catch (err) {
      console.error(err);
      setLinksData([]);
    }
  };

  useEffect(() => {
    getFolderList();
    getLinks({ folderId: "1" });
  }, []);

  return (
    <section>
      <SearchBar />
      <FolderListBar folderList={folderList} onClick={getLinks} />
      {linksData.length === 0 ? (
        <EmptyFolder />
      ) : (
        <CardBox linksData={linksData} />
      )}
    </section>
  );
}

export default Folder;
