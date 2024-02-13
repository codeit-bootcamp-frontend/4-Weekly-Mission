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
    try {
      const newProfile = await fetchSampleProfile();
      setProfile(newProfile);
    } catch (e) {
      alert(e);
      return;
    }
  }

  async function getFolder() {
    try {
      const response = await fetchSampleFolder();
      setFolder(response);
    } catch (e) {
      alert(e);
      return;
    }
  }

  useEffect(() => {
    getFolder();
    getProfile();
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
