import GetFolderInfo from "api/GetFolderInfo";
import Footer from "components/SharedPage/Footer/Footer";
import Header from "components/SharedPage/Header/Header";
import Main from "components/SharedPage/Main/Main";
import Nav from "components/SharedPage/Nav/Nav";
import useAsync from "hook/useAsync";

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
