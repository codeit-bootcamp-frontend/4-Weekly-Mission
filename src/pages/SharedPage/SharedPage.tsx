import React from "react";
import { useEffect, useState } from "react";
import { getFolder } from "../../apis/Api";
import Header from "../../components/Header/Header";
import LinkSearch from "../../components/LinkSearch/LinkSearch";
import Cards from "../../components/Cards/Cards";

function SharedPage() {
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

  // Cards
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
      <Header folderData={folderData} />
      <LinkSearch />
      <Cards cardList={cardList} />
    </>
  );
}

export default SharedPage;
