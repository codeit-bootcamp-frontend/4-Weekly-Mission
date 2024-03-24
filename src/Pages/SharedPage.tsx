import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import LinkList from "../components/LinkList";
import SearchBar from "../components/SearchBar";
import { getSampleFolderLinks } from "../api/api";

interface Data {
  url: string;
  id: number;
  imageSource: string;
  createdAt: string;
  description: string;
}

interface SearchData extends Data {
  title: string;
}

function SharedPage() {
  const [linkData, setLinkData] = useState<SearchData[]>([]);
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

  const getLinkData = async () => {
    const { folder } = await getSampleFolderLinks();
    
    if (!folder) return;

    setLinkData(folder.links);
  }

  useEffect(() => {
    getLinkData();
  }, [])

  return (
    <>
      <Header />
      <SearchBar
        inputValue={search}
        searchWord={searchWord}
        onChange={handleChange}
        onClick={handleCloseButtonClick}
        onSubmit={handleSubmit}/>
      <LinkList keyword={searchWord} linkData={linkData}/>
    </>
  )
}

export default SharedPage;