import Footer from "components/FolderPage/Footer/Footer";
import Header from "components/FolderPage/Header/Header";
import Main from "components/FolderPage/Main/Main";
import Nav from "components/FolderPage/Nav/Nav";
import { GetUserFolder, GetLinks } from "api/GetUserFolder";
import { useState, useEffect } from "react";
import styled from "styled-components";

function Folder() {
  const [search, setSerch] = useState("");
  const [folderListInfo, setFolderListInfo] = useState([]);
  const [selectedName, setSelectedName] = useState("전체");
  const [selectedId, setSelectedId] = useState(null);
  const [links, setLinks] = useState([]);
  const [selectedModal, setSelectedModal] = useState("");

  const handleSearchChange = (e) => {
    setSerch(e.target.value);
  };

  const handleSelectedFolder = ({ name, id }) => {
    setSelectedId(id);
    setSelectedName(name);
  };

  const loadFolderListInfo = async (info) => {
    try {
      const folders = await GetUserFolder(info);
      setFolderListInfo(folders.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadLinks = async (info) => {
    try {
      const links = await GetLinks(info);
      setLinks(links.data);
    } catch (error) {
      console.error(error);
    }
  };

  const setModal = (value) => {
    setSelectedModal(value);
  };

  // const ModalOverlay = styled.div`
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(
  //     0,
  //     0,
  //     0,
  //     0.7
  //   ); /* Semi-transparent black background */
  //   display: ${selectedModal
  //     ? "flex"
  //     : "none"}; /* Show if selectedModal is truthy */
  //   justify-content: center;
  //   align-items: center;
  //   justify-content: center;
  //   align-items: center;
  //   z-index: 10;
  // `;

  useEffect(() => {
    loadFolderListInfo({ userId: 1 });
    loadLinks({ userId: 1, folderId: selectedId });
  }, [selectedId, selectedModal]);

  return (
    <>
      {/* <ModalOverlay /> */}
      <Nav />
      <Header />
      <Main
        search={search}
        folderListInfo={folderListInfo}
        selectedId={selectedId}
        selectedName={selectedName}
        links={links}
        selectedModal={selectedModal}
        onSelectedFolder={handleSelectedFolder}
        onChange={handleSearchChange}
        setModal={setModal}
      />
      <Footer />
    </>
  );
}

export default Folder;
