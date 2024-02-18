import GetFolderInfo from "api/GetFolderInfo";
import Footer from "components/FolderPage/Footer/Footer";
import Header from "components/FolderPage/Header/Header";
import Main from "components/FolderPage/Main/Main";
import Nav from "components/FolderPage/Nav/Nav";
import useAsync from "hook/FolderPage/useAsync";

const { useState, useEffect } = require("react");

function Folder() {
  const [search, setSerch] = useState("");
  const [folderInfo, setFolderInfo] = useState({});
  const [isLoading, loadingError, AsyncedGetFolderInfo] =
    useAsync(GetFolderInfo);

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

  return (
    <>
      <Nav />
      <Header folderInfo={folderInfo} loadingError={loadingError} />
      <Main
        search={search}
        folderInfo={folderInfo}
        onChange={handleSearchChange}
        loadingError={loadingError}
      />
      <Footer />
    </>
  );
}

export default Folder;
