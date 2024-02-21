import { useEffect, useState } from "react";
import { getUser, getFolder } from "../components/Api";
import Gnb from "../components/Gnb";
import Header from "../components/Header";
import LinkSearch from "../components/LinkSearch";
import Card from "../components/Card";
import Footer from "../components/Footer";

function SharedPage() {
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

  // Header
  const [folderData, setFolderData] = useState({
    folderName: "",
    profileName: "",
    profileImg: "",
  });

  useEffect(() => {
    const getFolderData = async () => {
      try {
        const profile = await getFolder();
        setFolderData({
          folderName: profile.folder.name,
          profileName: profile.folder.owner.name,
          profileImg: profile.folder.owner.profileImageSource,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getFolderData();
  }, []);

  // Card
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const getFolderData = async () => {
      try {
        const card = await getFolder();
        setCardList(card.folder.links);
      } catch (error) {
        console.log(error);
      }
    };

    getFolderData();
  }, []);

  return (
    <>
      <Gnb userData={userData} isUserDataLoaded={isUserDataLoaded} />
      <Header folderData={folderData} />
      <LinkSearch />
      <Card cardList={cardList} />
      <Footer />
    </>
  );
}

export default SharedPage;
