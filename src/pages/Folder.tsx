import { useEffect, useState, useRef } from "react";

import { getFolderListData, getFolderLinksData } from "../api/api";
import CardBox from "../components/CardBox";
import SearchBar from "../components/SearchBar";
import FolderListBar from "../components/FolderListBar";
import EmptyFolder from "../components/EmptyFolder";
import { useSearchBar } from "../hooks/useSearchBar";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import AddLinkBar from "../components/AddLinkBar";
//types
import { FolderList, LinksData } from "../types/commonTypes";

function Folder() {
  const [folderList, setFolderList] = useState<FolderList[]>([]);
  const [linksData, setLinksData] = useState<LinksData[]>([]);
  const [searchVal, handleChange, filterdData, handleClickClose] = useSearchBar(
    "",
    linksData
  );

  const targetRef = useRef<HTMLDivElement>(null);
  const [observe, unobserve, isScrolled] = useIntersectionObserver();

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

  useEffect(() => {
    observe(targetRef.current as HTMLDivElement);
  }, [observe]);

  return (
    <>
    <section>
        <div ref={targetRef}></div>
      <SearchBar
        searchVal={searchVal}
        onChange={handleChange}
        handleClickClose={handleClickClose}
      />
      <FolderListBar folderList={folderList} onClick={getLinks} />
      {linksData?.length ? (
        <CardBox linksData={filterdData} />
      ) : (
        <EmptyFolder />
      )}
    </section>
      {!isScrolled && <AddLinkBar isAtBottom={true} />}
    </>
  );
}

export default Folder;
