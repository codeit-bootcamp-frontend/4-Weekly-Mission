import GetFolderInfo from "api/GetFolderInfo";
import Footer from "components/SharedPage/Footer/Footer";
import Header from "components/SharedPage/Header/Header";
import Main from "components/SharedPage/Main/Main";
import Nav from "components/SharedPage/Nav/Nav";
import useAsync from "hook/useAsync";
import { useState, useEffect } from "react";

function Folder() {
  const [search, setSerch] = useState("");
  const [folderInfo, setFolderInfo] = useState({});
  const [loadingError] = useAsync(GetFolderInfo);

  const handleSearchChange = (e) => {
    setSerch(e.target.value);
  };

  const handleCloseClick = (e) => {
    setSerch("");
  };

  const loadFolderInfo = async () => {
    const { folder } = await GetFolderInfo();
    setFolderInfo(folder);
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
        handleCloseClick={handleCloseClick}
      />
      <Footer />
    </>
  );
}

export default Folder;
