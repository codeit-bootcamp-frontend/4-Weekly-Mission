import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getSampeUser, getSampleFolder } from "../../utils/Api";
import FolderTilte from "../../components/FolderTitle/FolderTilte";
import CardList from "../../components/CardList/CardList";

function Index() {
  // 함수 이름을 대문자로 변경
  const [user, setUser] = useState(null);
  console.log(user);

  const [folder, setFolder] = useState(null);

  useEffect(() => {
    getSampeUser().then(setUser);
    getSampleFolder().then(setFolder);
  }, []);

  return (
    <main>
      <Header user={user} />
      <FolderTilte folderObject={folder} />
      <CardList folderObject={folder} />
      <Footer />
    </main>
  );
}

export default Index;
