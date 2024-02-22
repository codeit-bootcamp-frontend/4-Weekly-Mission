import { useState } from "react";
import FolderDetail from "../componenets/FolderDetail";
import Footer from "../componenets/Footer";
import LinkAdd from "../componenets/LinkAdd";
import Nav from "../componenets/Nav";
import useFetchData from "../hooks/useFetchData";
import AddFolder from "../componenets/modal/AddFolder";

function Folder() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const profileData = useFetchData("profileDataFetch", 1);
  const folderListData = useFetchData("folderListDataFetch", 1);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <Nav isModalOpen={isModalOpen} profileData={profileData} />
      <LinkAdd isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <FolderDetail
        isModalOpen={isModalOpen}
        folderListData={folderListData}
        toggleModal={toggleModal}
      />
      <Footer isModalOpen={isModalOpen} />
      <AddFolder isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}

export default Folder;
