import GetFolderInfo from "api/GetFolderInfo";
import Footer from "components/SharedPage/Footer/Footer";
import Header from "components/SharedPage/Header/Header";
import Main from "components/SharedPage/Main/Main";
import Nav from "components/SharedPage/Nav/Nav";
import useAsync from "hook/useAsync";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Folder() {
  const [search, setSerch] = useState("");
  const [folderInfo, setFolderInfo] = useState({});
  const [isLoading, loadingError, AsyncedGetFolderInfo] =
    useAsync(GetFolderInfo);
  const [selectedModal, setSelectedModal] = useState("");

  const handleSearchChange = (e) => {
    setSerch(e.target.value);
  };

  const loadFolderInfo = async () => {
    try {
      const { folder } = await AsyncedGetFolderInfo();
      setFolderInfo(folder);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFolderInfo();
  }, []);

  const setModal = (value) => {
    setSelectedModal(value);
  };

  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.7
    ); /* Semi-transparent black background */
    display: ${selectedModal
      ? "flex"
      : "none"}; /* Show if selectedModal is truthy */
    justify-content: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    z-index: 10;
  `;

  return (
    <>
      <ModalOverlay />
      <Nav />
      <Header folderInfo={folderInfo} loadingError={loadingError} />
      <Main
        search={search}
        folderInfo={folderInfo}
        onChange={handleSearchChange}
        loadingError={loadingError}
        selectedModal={selectedModal}
        setModal={setModal}
      />
      <Footer />
    </>
  );
}

export default Folder;
