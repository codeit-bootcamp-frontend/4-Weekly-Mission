import React, { useEffect, useState } from "react";
import Header from "../components/common/header/Header";
import Footer from "../components/common/Footer";
import { getSampeUser, getSampleFolder } from "../utils/Api";
import FolderTilte from "../components/folderTitle/FolderTilte";
import LinkContainer from "../components/share/Container";

function Shared() {
  // 함수 이름을 대문자로 변경

  const [folder, setFolder] = useState(null);

  useEffect(() => {
    getSampleFolder().then(setFolder);
  }, []);

  return (
    <>
      <FolderTilte folderObject={folder} />
      <LinkContainer folderObject={folder} />
      <Footer />
    </>
  );
}

export default Shared;
