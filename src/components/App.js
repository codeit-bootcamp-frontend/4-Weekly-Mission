import { getUser, getFolder } from "../api";
import "./App.css";
import NavigationBar from "./NavigationBar";
import { useEffect, useState } from "react";
import FolderBar from "./FolderBar";
import CardSection from "./CardSection";
import Footer from "./Footer";

function App() {
  const [profile, setProfile] = useState(null);
  const [folderName, setFolderName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [cardList, setCardList] = useState(null);

  useEffect(() => {
    async function getProFile() {
      const user = await getUser();
      if (user) {
        const { email, profileImageSource } = user;
        setProfile({ email, profileImageSource });
      }
    }

    getProFile();
  }, []);

  useEffect(() => {
    async function getProFileFolder() {
      const {
        folder: { name, owner, links },
      } = await getFolder();
      setFolderName(name);
      setUserName(owner.name);
      setProfileImage(owner.profileImageSource);
      setCardList(links);
    }

    getProFileFolder();
  }, []);

  return (
    <div className="App">
      <NavigationBar profile={profile} />
      <FolderBar
        folderName={folderName}
        userName={userName}
        imgSrc={profileImage}
      />
      <CardSection cardList={cardList} />
      <Footer />
    </div>
  );
}

export default App;
