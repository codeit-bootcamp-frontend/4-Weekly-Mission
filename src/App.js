import "./global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { fetchProfile } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  async function getProfile() {
    let newProfile = null;
    try {
      newProfile = await fetchProfile();
    } catch (e) {
      console.log(e);
      return;
    }
    setProfile(newProfile);
  }

  useEffect(() => {
    getProfile();
  });

  return (
    <div className="App">
      <Navbar profile={profile} />
      <Footer />
    </div>
  );
}

export default App;
