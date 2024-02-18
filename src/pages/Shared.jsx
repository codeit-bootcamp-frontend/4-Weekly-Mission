import { getData } from "../api/api";
import { useEffect, useState } from "react";
import CardBox from "../components/CardBox";
import TopNavBar from "../components/TopNavBar";
import UserProfile from "../components/UserProfile";
import SearchBar from "../components/SearchBar";
import BottomNavBar from "../components/BottomNavBar";

function Shared() {
  const [profileData, setProfileData] = useState({});
  const [folderData, setFolderData] = useState({});

  const getProfileData = async (options) => {
    try {
      const newProfile = await getData(options);
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
      <header>
        <TopNavBar profileData={profileData} />
        <UserProfile folderData={folderData} />
      </header>
      <main>
        <section>
          <SearchBar />
          <CardBox folderData={folderData} />
        </section>
      </main>
      <footer>
        <BottomNavBar />
      </footer>
    </>
  );
}

export default Shared;
