import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import getUserData from "./getUserData.js";
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
        throw error;
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
