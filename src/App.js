import "./global.css";
import Navbar from "./components/Navbar";
import FolderInfoView from "./components/FolderInfoView";
import FolderView from "./components/FolderView";
import Footer from "./components/Footer";
import { fetchSampleProfile, fetchSampleFolder } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState(null);

  async function getProfile() {
    let newProfile = null;
    try {
      newProfile = await fetchSampleProfile();
    } catch (e) {
      alert(e);
      return;
    }
    setProfile(newProfile);
  }

  async function getFolder() {
    let newFolder = null;
    try {
      const response = await fetchSampleFolder();
      newFolder = response;
    } catch (e) {
      alert(e);
      return;
    }
    setFolder(newFolder);
  }

  useEffect(() => {
    getProfile();
    getFolder();
  }, []);

  return (
    <div className="App">
      <Navbar prfile={profile} />
      <FolderInfoView folder={folder} />
      <FolderView folder={folder} />
      <Footer />
    </div>
  );
}

export default App;
