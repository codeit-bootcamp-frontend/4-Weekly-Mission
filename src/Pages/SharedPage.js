import { SharedHeader } from "../Components/SharedHeader";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import { SharedMain } from "../Components/SharedMain";
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
      <SharedHeader folder={folder}></SharedHeader>
      <SharedMain cards={cardLinks}></SharedMain>
      <Footer></Footer>
    </>
  );
}

export default SharedPage;
