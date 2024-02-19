import { getData, getFolderListData, getWholeFolderListData } from "../api/api";
import { useEffect, useState } from "react";
import CardBox from "../components/CardBox";
import TopNavBar from "../components/TopNavBar";
import SearchBar from "../components/SearchBar";
import BottomNavBar from "../components/BottomNavBar";
import AddLinkBar from "../components/AddLinkBar";
import FolderListBar from "../components/FolderListBar";
import EmptyFolder from "../components/EmptyFolder";

function Folder() {
  const [profileData, setProfileData] = useState({});
  const [folderList, setFolderList] = useState([]);
  const [linksData, setLinksData] = useState([]);

  const getProfileData = async (options) => {
    try {
      const newProfile = await getData(options);
      setProfileData(newProfile);
    } catch (err) {
      console.error(err);
      setProfileData({});
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

  const getLinks = async (folderId) => {
    try {
      console.log("folderId: ", folderId);
      const linksData = await getWholeFolderListData(folderId);
      const { data } = linksData;
      setLinksData(data);
    } catch (err) {
      console.error(err);
      setLinksData([]);
    }
  };

  useEffect(() => {
    getProfileData({ path: "user" });
    getFolderList();
    getLinks({ folderId: "1" });
  }, []);
  //TODO: useLocation써서 header folder일때 sticky 구분하기
  return (
    <>
      <header>
        <TopNavBar profileData={profileData} />
        <AddLinkBar />
      </header>
      <main>
        <section>
          <SearchBar />
          <FolderListBar folderList={folderList} onClick={getLinks} />
          {linksData.length === 0 ? (
            <EmptyFolder />
          ) : (
            <CardBox linksData={linksData} />
          )}
        </section>
      </main>
      <footer>
        <BottomNavBar />
      </footer>
    </>
  );
}

export default Folder;
