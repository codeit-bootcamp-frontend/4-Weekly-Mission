import { useEffect, useState } from "react";
import Footer from "./footer/Footer.js";
import NavBar from "./nav-bar/NavBar.js";
import getUserData from "./userData.js";
import "./global.css";

const App = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserData();
        const { email, profileImageSource } = data;
        setProfile({ email, profileImageSource });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <NavBar profile={profile} />
      <main></main>
      <Footer />
    </>
  );
};

export default App;
