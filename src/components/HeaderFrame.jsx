import { useLocation } from "react-router-dom";
import { getData } from "../api/api";
import { useState, useEffect } from "react";
import TopNavBar from "./TopNavBar";
import AddLinkBar from "./AddLinkBar";
import UserProfile from "./UserProfile";

function HeaderFrame() {
  const { pathname } = useLocation();
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

  const getFolderProfileData = async (options) => {
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
    getFolderProfileData({ path: "folder" });
  }, []);

  return (
    <>
      <TopNavBar
        profileData={profileData}
        isSticky={pathname === "/shared" ? true : false}
      />
      {pathname === "/folder" && <AddLinkBar />}
      {pathname === "/shared" && <UserProfile folderData={folderData} />}
    </>
  );
}

export default HeaderFrame;
