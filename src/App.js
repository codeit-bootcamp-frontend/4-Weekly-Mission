import "./global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FolderView from "./components/FolderView";
import { fetchSampleProfile, fetchSampleFolder } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState();
  const [folder, setFolder] = useState();

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
      <FolderView folder={folder} />
      <Footer />
    </div>
  );
}

export default App;
