import { useState } from "react";
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

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <Layout>
      <div className="MainFolderPage">
        <AddLinkBar />
        <div className="MainFolderPageItems">
          <SearchBar />
          <div className="MainFolderPageBox">
            <FolderToolBar
              folderLists={folderLists}
              chosenFolderId={chosenFolderId}
              onClickFolder={setChosenFolderId}
            />
            {linksData.length ? (
              <CardInventory>
                {linksData?.map((linkCard) => (
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
  /*<button style={{
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
