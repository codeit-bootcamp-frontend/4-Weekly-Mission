import { getUser, getFolder } from "../api";
import "./App.css";
import NavigationBar from "./NavigationBar";
import { useEffect, useState } from "react";
import FolderBar from "./FolderBar";
import CardSection from "./CardSection";

function App() {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState(null);

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
      const fold = await getFolder();
      if (fold) {
        const { owner, links, name } = fold.folder;
        setFolder({ owner, links, name });
      }
    }

    getProFileFolder();
  }, []);

  return (
    <div className="App">
      <NavigationBar profile={profile} />
      <FolderBar folder={folder} />
      <CardSection />
    </div>
  );
}

export default App;
