import { useState, useEffect } from "react";

import Header from "./header/Header.jsx";
import NavBar from "../../components/navbar/NavBar.jsx";
import Content from "./content/Content.jsx";

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
        setUserFolder(userFolderData.folder);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <NavBar user={user} />
      <Header userFolder={userFolder} />

      <Content folderLinks={userFolder?.links}/>


    </div>
  );
}

export default Shared;
