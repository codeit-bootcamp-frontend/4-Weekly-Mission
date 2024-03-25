import { useEffect, useState, useRef } from "react";
import Layout from "../../layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardInventory from "../../components/CardInventory/CardInventory";
import ShareLinkCard from "../../components/ShareLinkCard/ShareLinkCard";
//import AddFolder from "../../components/Modal/AddFolder";
//import EditFolder from "../../components/Modal/EditFolder";
import "./MainFolderPage.css";
import { useGetFolderLinks } from "../../hooks/useGetFolderLinks";
import { useGetFolderLists } from "../../hooks/useGetFolderLists";
import AddLinkBar from "../../components/AddLinkBar/AddLinkBar";
import FolderToolBar from "../../components/FolderToolBar/FolderToolBar";
import EmptyLink from "../../components/EmptyLink/EmptyLink";

const MainFolderPage = () => {
  const { data: folderLists } = useGetFolderLists();
  const [chosenFolderId, setChosenFolderId] = useState("all");
  const { data: linksData } = useGetFolderLinks(chosenFolderId);

  const [searchWord, setSearchWord] = useState("");
  const [isAddLinkBarFixed, setIsAddLinkBarFixed] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const addLinkBarRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, [footerRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsAddLinkBarFixed(true);
      } else {
        setIsAddLinkBarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchedLinksData = linksData.filter(
    (link) =>
      link.url?.includes(searchWord) ||
      link.title?.includes(searchWord) ||
      link.description?.includes(searchWord),
  );

  return (
    <Layout ref={footerRef}>
      <div className="MainFolderPage">
        <AddLinkBar
          ref={addLinkBarRef}
          className={`${isFooterVisible ? "hiddenAddLinkBar" : isAddLinkBarFixed ? "fixedAddLinkBar" : "input-container"}`}
        />
        <div className="MainFolderPageItems">
          <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
          <div className="MainFolderPageBox">
            <FolderToolBar
              folderLists={folderLists}
              chosenFolderId={chosenFolderId}
              onClickFolder={setChosenFolderId}
            />
            {searchedLinksData.length ? (
              <CardInventory>
                {searchedLinksData?.map((linkCard) => (
                  <ShareLinkCard key={linkCard?.id} {...linkCard} />
                ))}
              </CardInventory>
            ) : (
              <EmptyLink />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
{
  /*
  //모달 연결은 훅으로 따로 구현하기
  //const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  //const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  //const openAddModal = () => setIsAddModalOpen(true);
  //const closeAddModal = () => setIsAddModalOpen(false);

  //const openEditModal = () => setIsEditModalOpen(true);
  //const closeEditModal = () => setIsEditModalOpen(false);
  
  <button style={{
        fontSize: "20px",
        borderColor: "black",
      }} onClick={openAddModal}>+폴더 추가</button>
      <button style={{
        fontSize: "20px",
        borderColor: "black",
      }} onClick={openEditModal}>*이름 변경</button>
      <AddFolder isOpen={isAddModalOpen} closeModal={closeAddModal} />
    <EditFolder isOpen={isEditModalOpen} closeModal={closeEditModal} />*/
}

export default MainFolderPage;
