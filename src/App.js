import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import getUserData from "./apis/getUserData.js";
import SearchBar from "./components/PageContent/SearchBar/SearchBar.js";
import PageBody from "./components/PageContent/PageBody/PageBody.js";
import Folder from "./components/PageContent/Folder/Folder.js";
import CardList from "./components/Card/CardList/CardList.js";
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
      <Folder />
      <PageBody searchBar={<SearchBar />} cardList={<CardList />} />
      <Footer />
    </>
  );
};

export default App;
