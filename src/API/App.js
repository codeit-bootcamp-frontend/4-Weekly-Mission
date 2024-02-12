import { useState, useEffect } from "react";
import { getFolder, getProfile } from "./Api";
import { Header } from "../Components/Header";

function App() {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState({
    userProfileImage: null,
  });
  const [cardLinks, setCardLinks] = useState(null);

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

  return <Header profile={profile} folder={folder}></Header>;
}

export default App;
