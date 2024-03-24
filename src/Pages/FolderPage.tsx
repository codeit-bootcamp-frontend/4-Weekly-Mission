import LinkAdd from "../components/LinkAdd";
import SearchBar from "../components/SearchBar";
import FolderList from "../components/FolderList";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { getFolderLinksData, getFolderLists } from "../api/api";

const FIRST_SELECTED_FOLDER = "전체";

interface SearchData extends Data {
  title?: string;
}

function FolderPage() {
  const [folderListData, setFolderListData] = useState([]);
  const [linkData, setLinkData] = useState<SearchData[]>([]);
  const [currentId, setCurrentId] = useState(0);
  const [folderName, setFolderName] = useState(FIRST_SELECTED_FOLDER);
  const [search, setSearch] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleCloseButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSearch('');
    setSearchWord('');
  }

  const handleSubmit = (searchQuery: string) => {
    setSearchWord(searchQuery);
  };

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
      <SearchBar
        inputValue={search}
        searchWord={searchWord}
        onChange={handleChange}
        onClick={handleCloseButtonClick}
        onSubmit={handleSubmit}/>
      <FolderList
        keyword={searchWord}
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