import getData from "../api";
import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

function App() {
  const [profileData, setProfileData] = useState({});
  const [folderProfileData, setFolderProfileData] = useState({});

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

  const getFolderProfileData = async (options) => {
    try {
      const newFolder = await getData(options);
      const { folder } = newFolder;
      const { owner } = folder;
      console.log(owner);
      setFolderProfileData(owner);
    } catch (err) {
      console.error(err);
      setFolderProfileData({});
    }
  };

  useEffect(() => {
    getProfile({ path: "user" });
    getFolderProfileData({ path: "folder" });
  }, []);

  return (
    <>
      <Header profileData={profileData} folderProfileData={folderProfileData} />
      <Card />
    </>
  );
}

export default App;
