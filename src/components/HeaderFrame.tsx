import { useLocation } from "react-router-dom";
import { getData } from "../api/api";
import { useState, useEffect } from "react";
import TopNavBar from "./TopNavBar";
import AddLinkBar from "./AddLinkBar";
import UserProfile from "./UserProfile";
//types
import { ProfileData, FolderData } from "../types/commonTypes";

function HeaderFrame() {
  const { pathname } = useLocation();
  const [profileData, setProfileData] = useState<ProfileData | {}>({});
  const [folderData, setFolderData] = useState<FolderData | {}>({});

  const getProfileData = async (options: { path: string }) => {
    try {
      const newProfile = await getData(options);
      setProfileData(newProfile);
    } catch (err) {
      console.error(err);
      setProfileData({});
    }
  };

  const getFolderProfileData = async (options: { path: string }) => {
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
