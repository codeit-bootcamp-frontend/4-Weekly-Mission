import { useState, useEffect } from "react";
import ContentCard from "./content/ContentCard.jsx";
import Header from "./header/Header.jsx";
import SearchBar from "./search-bar/SearchBar.jsx";
import Footer from "./../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar.jsx";

function Shared() {
  const [user, setUser] = useState(null);
  const [userFolder, setUserFolder] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("https://bootcamp-api.codeit.kr/api/sample/user"),
      fetch("https://bootcamp-api.codeit.kr/api/sample/folder"),
    ])
      .then(([userRes, userFolderRes]) =>
        Promise.all([userRes.json(), userFolderRes.json()])
      )
      .then(([userData, userFolderData]) => {
        setUser(userData);
        setUserFolder(userFolderData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <NavBar user={user} />
      <Header userFolder={userFolder} />

      <SearchBar />
      <ContentCard />

      <Footer />
    </div>
  );
}

export default Shared;
