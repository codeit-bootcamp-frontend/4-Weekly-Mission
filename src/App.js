import "./global.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { fetchProfile } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);

  async function getProfile() {
    try {
      const newProfile = await fetchProfile();
      setProfile(newProfile);
    } catch (e) {
      alert(e);
      return;
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="App">
      <Navbar profile={profile} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
