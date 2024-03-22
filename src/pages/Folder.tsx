import { getFolderListData, getFolderLinksData } from "../api/api";
import { useEffect, useState } from "react";
import CardBox from "../components/CardBox";
import SearchBar from "../components/SearchBar";
import FolderListBar from "../components/FolderListBar";
import EmptyFolder from "../components/EmptyFolder";

export interface FolderList {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

export interface LinksData {
  created_at: string;
  description: string | null;
  folder_id: number | null;
  id: number;
  image_source: string | undefined;
  title: string | null;
  updated_at: string | null;
  url: string;
}

function Folder() {
  const [folderList, setFolderList] = useState<FolderList[]>([]);
  const [linksData, setLinksData] = useState<LinksData[]>([]);

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

  const getLinks = async (folderId: { folderId?: string }) => {
    try {
      const linksData = await getFolderLinksData(folderId);
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
      {linksData?.length ? <CardBox linksData={linksData} /> : <EmptyFolder />}
    </section>
  );
}

export default Folder;
