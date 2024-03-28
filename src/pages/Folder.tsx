import React, { useState } from "react";
import FolderDetail from "../componenets/FolderDetail";
import Footer from "../componenets/Footer";
import LinkAdd from "../componenets/LinkAdd";
import Nav from "../componenets/Nav";
import useFetchData from "../hooks/useFetchData";
import Modal from "../componenets/modal/Modal";

type User = (data: Data) => void;

type Input = (data: string) => void;

interface Data {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export const UserData = React.createContext<User>({} as User);

export const setInputData = React.createContext<Input>({} as Input);

function Folder() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [key, setKey] = useState(0);
  const [folderName, setFolderName] = useState("");
  const [data, setData] = useState<Data>({} as Data);
  const [input, setInput] = useState("");

  const profileData = useFetchData("profileDataFetch", 1);
  const folderListData = useFetchData("folderListDataFetch", 1);

  function toggleModal(Id: number) {
    setKey(Id);
    setIsModalOpen(!isModalOpen);
  }

  function handleInputData(data: string) {
    setInput(data);
  }

  function handleFolderName(folderName: string) {
    setFolderName(folderName);
  }

  function handleData(data: Data) {
    setData(data);
  }
  return (
    <>
      <Nav profileData={profileData} />
      <LinkAdd toggleModal={toggleModal} />
      <UserData.Provider value={handleData}>
        <setInputData.Provider value={handleInputData}>
          <FolderDetail
            folderListData={folderListData}
            handleFolderName={handleFolderName}
            toggleModal={toggleModal}
            input={input}
          />
        </setInputData.Provider>
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
