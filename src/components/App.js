import getData from "../api";
import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

function App() {
  const [profileData, setProfileData] = useState({});
  const [folderData, setFolderData] = useState({});

  const getProfile = async (options) => {
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
    getProfile({ path: "user" });
    getFolderData({ path: "folder" });
  }, []);

  return (
    <>
      <Header profileData={profileData} folderData={folderData} />
      <Card folderData={folderData} />
    </>
  );
}

export default App;
