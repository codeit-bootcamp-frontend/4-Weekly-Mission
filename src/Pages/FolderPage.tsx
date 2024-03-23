import LinkAdd from "../components/LinkAdd";
import SearchBar from "../components/SearchBar";
import FolderList from "../components/FolderList";
import { useEffect, useState } from "react";
import { getFolderLinksData, getFolderLists } from "../api/api";

interface Data {
  url: string;
  id: number;
  imageSource: string;
  createdAt: string;
  description: string;
}

const FIRST_SELECTED_FOLDER = "전체";

function FolderPage() {
  const [folderListData, setFolderListData] = useState([]);
  const [linkData, setLinkData] = useState<Data[]>([]);
  const [currentId, setCurrentId] = useState(0);
  const [folderName, setFolderName] = useState(FIRST_SELECTED_FOLDER);

  //button의 id와 이름 가져오는 함수.
  const handleFolderButtonClick = (id: number, name: string) => {
    setCurrentId(id);
    setFolderName(name);
  }

  //폴더 이름 가져오는 함수.
  const getFolderData = async () => {
    const { data } = await getFolderLists();
    
    if (!data) return;

    setFolderListData(data);
  }

  useEffect(() => {
    getFolderData();
  }, [])

  //폴더 안에 저장된 링크를 가져오는 함수
  const getLinkData = async (id: string|number) => {
    if (id === 0) id = '';
    const { data } = await getFolderLinksData(id);
    
    if (!data) return;

    const purifiedData = data.map((item: any): Data => 
      (
        {
          url: item.url,
          id: item.id,
          imageSource: item.image_source,
          createdAt: item.created_at,
          description: item.description,
        }
      )
    )

    setLinkData(purifiedData);
  }

  useEffect(() => {
    getLinkData(currentId);
  }, [currentId])

  return (
    <>
      <LinkAdd />
      <SearchBar />
      <FolderList
        linkData={linkData}
        folderNameList={folderListData}
        currentId={currentId}
        folderName={folderName}
        onClick={handleFolderButtonClick}
      />
    </>
  )
}

export default FolderPage;