import { useState } from "react";
import FolderDetail from "../componenets/FolderDetail";
import Footer from "../componenets/Footer";
import LinkAdd from "../componenets/LinkAdd";
import Nav from "../componenets/Nav";
import useFetchData from "../hooks/useFetchData";
import Modal from "../componenets/modal/Modal";

function Folder() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [key, setKey] = useState(0);
  const [folderName, setFolderName] = useState("");

  const profileData = useFetchData("profileDataFetch", 1);
  const folderListData = useFetchData("folderListDataFetch", 1);

  function toggleModal(Id) {
    setKey(Id);
    setIsModalOpen(!isModalOpen);
  }

  function handleFolderName(folderName) {
    setFolderName(folderName);
  }

  return (
    <>
      <Nav profileData={profileData} />
      <LinkAdd toggleModal={toggleModal} />
      <FolderDetail
        folderListData={folderListData}
        handleFolderName={handleFolderName}
        toggleModal={toggleModal}
      />
      <Footer />
      <Modal
        folderName={folderName}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        Id={key}
      />
    </>
  );
}

export default Folder;
