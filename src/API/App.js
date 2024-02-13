import { useState, useEffect } from "react";
import { getFolder, getProfile } from "./Api";
import { Header } from "../Components/Header";
import { Main } from "../Components/Main";
import { Footer } from "../Components/Footer";

function App() {
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
      <Header profile={profile} folder={folder}></Header>
      <Main cards={cardLinks}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
