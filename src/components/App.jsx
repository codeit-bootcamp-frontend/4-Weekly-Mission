import getData from "../api/api";
import { useEffect, useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [profileData, setProfileData] = useState({});
  const [folderData, setFolderData] = useState({});

  const getProfileData = async (options) => {
    try {
      const newProfile = await getData(options);
      console.log(newProfile);
      setProfileData(newProfile);
    } catch (err) {
      console.error(err);
      setProfileData({});
    }
  };

  const getFolderData = async (options) => {
    try {
      const newFolder = await getData(options);
      const { folder } = newFolder;
      console.log(folder);
      setFolderData(folder);
    } catch (err) {
      console.error(err);
      setFolderData({});
    }
  };

  useEffect(() => {
    getProfileData({ path: "user" });
    getFolderData({ path: "folder" });
  }, []);

  return (
    <>
      <Header profileData={profileData} folderData={folderData} />
      <Main folderData={folderData} />
      <Footer />
    </>
  );
}

export default App;
