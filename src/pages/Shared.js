import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getSampeUser, getSampleFolder } from "../utils/Api";
import FolderTilte from "../components/FolderTitle/FolderTilte";
import LinkContainer from "../components/links-container/Container";

function Shared() {
  // 함수 이름을 대문자로 변경
  const [user, setUser] = useState(null);

  const [folder, setFolder] = useState(null);
  console.log(folder);

  useEffect(() => {
    getSampeUser().then(setUser);
    getSampleFolder().then(setFolder);
  }, []);

  return (
    <main>
      <Header user={user} />
      <FolderTilte folderObject={folder} />
      <LinkContainer folderObject={folder} />
      <Footer />
    </main>
  );
}

export default Shared;
