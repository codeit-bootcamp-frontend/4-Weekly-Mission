import { FolderHeader } from "../Components/FolderHeader";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import { FolderMain } from "../Components/FolderMain";
import { useState, useEffect } from "react";
import { getFolder, getProfile } from "../API/SharedPageApi";

function SharedPage() {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState({
    userProfileImage: null,
  });
  const [cardLinks, setCardLinks] = useState([]);

  const getData = async () => {
    const userData = await getProfile();
    const { userProfileImage, userName, folderName, cardLinks } =
      await getFolder();
    setProfile(userData);
    setFolder({ userProfileImage, userName, folderName });
    setCardLinks(cardLinks);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav profile={profile}></Nav>
      <FolderHeader folder={folder}></FolderHeader>
      <FolderMain cards={cardLinks}></FolderMain>
      <Footer></Footer>
    </>
  );
}

export default SharedPage;
