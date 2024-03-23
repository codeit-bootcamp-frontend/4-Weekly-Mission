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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleCloseButtonClick = (e: MouseEvent) => {
    setSearch('');
  }

  const searchData = linkData.filter((data) => {
    const SEARCH_WORD = search.toLowerCase();
    const URL = data.url.toLowerCase();
    const TITLE = data.title.toLowerCase();
    const DESCRIPTION = data.description.toLowerCase();
    
    return URL.includes(SEARCH_WORD) || TITLE.includes(SEARCH_WORD) || DESCRIPTION.includes(SEARCH_WORD)
  })


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
      <SearchBar inputValue={search} onChange={handleChange} onClick={handleCloseButtonClick}/>
      <LinkList linkData={searchData}/>
    </>
  )
}

export default SharedPage;