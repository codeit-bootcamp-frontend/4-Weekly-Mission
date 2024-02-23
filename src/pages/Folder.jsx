import React, { useState } from "react";
import FolderDetail from "../componenets/FolderDetail";
import Footer from "../componenets/Footer";
import LinkAdd from "../componenets/LinkAdd";
import Nav from "../componenets/Nav";
import useFetchData from "../hooks/useFetchData";
import Modal from "../componenets/modal/Modal";
export const UserData = React.createContext();

function Folder() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [key, setKey] = useState(0);
  const [folderName, setFolderName] = useState("");
  const [data, setData] = useState("");

  const profileData = useFetchData("profileDataFetch", 1);
  const folderListData = useFetchData("folderListDataFetch", 1);

  function toggleModal(Id) {
    setKey(Id);
    setIsModalOpen(!isModalOpen);
  }

  function handleFolderName(folderName) {
    setFolderName(folderName);
  }

  function handleData(data) {
    setData(data);
  }

  return (
    <>
      <Nav profileData={profileData} />
      <LinkAdd toggleModal={toggleModal} />
      <UserData.Provider value={handleData}>
        <FolderDetail
          folderListData={folderListData}
          handleFolderName={handleFolderName}
          toggleModal={toggleModal}
        />
      </UserData.Provider>
      <Footer />
      <Modal
        folderName={folderName}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        Id={key}
        data={data}
      />
    </>
  );
}

export default Folder;
