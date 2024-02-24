import Footer from "components/FolderPage/Footer/Footer";
import Header from "components/FolderPage/Header/Header";
import Main from "components/FolderPage/Main/Main";
import Nav from "components/FolderPage/Nav/Nav";
import { GetUserFolder, GetLinks } from "api/GetUserFolder";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    loadFolderListInfo({ userId: 1 });
    loadLinks({ userId: 1, folderId: selectedId });
  }, [selectedId, selectedModal]);

  return (
    <>
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
