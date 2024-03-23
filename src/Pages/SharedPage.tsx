import { useEffect, useState } from "react";
import Header from "../components/Header";
import LinkList from "../components/LinkList";
import SearchBar from "../components/SearchBar";
import { getSampleFolderLinks } from "../api/api";


function SharedPage() {
  const [linkData, setLinkData] = useState([]);

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
      <SearchBar />
      <LinkList linkData={linkData}/>
    </>
  )
}

export default SharedPage;