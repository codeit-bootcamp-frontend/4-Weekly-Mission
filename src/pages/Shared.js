import Header from "../components/sharing/Header";
import Footer from "../components/sharing/Footer";
import { useEffect, useState } from "react";
import { getSampleFolder, getUser } from "../utils/api";
import SearchInputForm from "../components/folder/ui-input/SearchInputForm";
import CardList from "../components/folder/ui-card/CardList";
import UserProfile from "../components/folder/ui-user/UserProfile";
import FolderHeaderLayout from "../components/folder/ui-layout/FolderHeaderLayout";
import MainLayout from "../components/folder/ui-layout/MainLayout";

const Shared = () => {
  const [user, setUser] = useState({
    email: null,
    image_source: null,
  });
  const [folderInfo, setFolderInfo] = useState({
    folderName: null,
    folderOwner: null,
    folderOwnerImage: null,
    folderLinks: [],
  });

  const loadUser = async () => {
    const userInfo = await getUser();
    if (!userInfo) return;
    setUser(userInfo["data"][0]);
  };

  const loadSampleFolder = async () => {
    const folderInfo = await getSampleFolder();
    setFolderInfo({
      folderName: folderInfo["folder"]["name"],
      folderOwner: folderInfo["folder"]["owner"]["name"],
      folderOwnerImage: folderInfo["folder"]["owner"]["profileImageSource"],
      folderLinks: folderInfo["folder"]["links"],
    });
  };

  useEffect(() => {
    loadUser();
    loadSampleFolder();
  }, []);

  return (
    <>
      <Header userInfo={user} fixed={true} />
      <div className="component-default-margin">
        <FolderHeaderLayout>
          <UserProfile folderInfo={folderInfo} />
          <div className="font-regular font-40px margin-auto">
            {folderInfo.folderName}
          </div>
        </FolderHeaderLayout>
        <MainLayout>
          <SearchInputForm />
          <CardList currentLinks={folderInfo.folderLinks} />
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};

export default Shared;
