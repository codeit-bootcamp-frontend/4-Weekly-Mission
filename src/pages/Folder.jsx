import { getData, getFolderListData } from "../api/api";
import { useEffect, useState } from "react";
import CardBox from "../components/CardBox";
import TopNavBar from "../components/TopNavBar";
import SearchBar from "../components/SearchBar";
import BottomNavBar from "../components/BottomNavBar";
import AddLinkBar from "../components/AddLinkBar";
import FolderListBar from "../components/FolderListBar";

function Folder() {
  const [profileData, setProfileData] = useState({});
  const [folderData, setFolderData] = useState({});
  const [folderList, setFolderList] = useState([]);

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

  const getFolderList = async () => {
    try {
      const folderListData = await getFolderListData();
      const { data } = folderListData;
      setFolderList(data);
    } catch (err) {
      console.error(err);
      setFolderList([]);
    }
  };

  useEffect(() => {
    getProfileData({ path: "user" });
    getFolderData({ path: "folder" });
    getFolderList();
  }, []);

  return (
    <>
      <header>
        <TopNavBar profileData={profileData} />
        <AddLinkBar />
      </header>
      <main>
        <section>
          <SearchBar />
          <FolderListBar folderList={folderList} />
        </section>
      </main>
      <footer>
        <BottomNavBar />
      </footer>
    </>
  );
}

export default Folder;
