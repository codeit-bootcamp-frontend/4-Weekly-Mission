import { useEffect, useState } from "react";
import { getUsersFolder, getUser } from "../components/Api";
import Gnb from "../components/Gnb";
import AddLinkInput from "../components/AddLinkInput";
import LinkSearch from "../components/LinkSearch";
import FolderItem from "../components/FolderItem";
import Footer from "../components/Footer";

function FolderPage() {
  // Gnb
  const [userData, setUserData] = useState({ email: "", img: "" });
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await getUser();
        setUserData({ email: user.email, img: user.profileImageSource });
        setIsUserDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  // FloderItem
  const [usersFolderData, setUsersFolderData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const usersFolder = await getUsersFolder();
        setUsersFolderData(usersFolder.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Gnb userData={userData} isUserDataLoaded={isUserDataLoaded} />
      <AddLinkInput />
      <LinkSearch />
      <FolderItem usersFolderData={usersFolderData} />
      <Footer />
    </>
  );
}

export default FolderPage;
