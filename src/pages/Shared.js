import { useState, useEffect, useCallback } from "react";
import { getFolderInfo } from "./../api";
import HeaderElement from "./../components/common/HeaderElement";
import FooterElement from "./../components/common/FooterElement";
import SharedSection from "./../components/shared/SharedSection";
import FolderList from "../components/shared/FolderList";
import "../style/shared.css";

function Shared() {
  const [folders, setFolders] = useState([]);

  const HandleLoad = useCallback(async () => {
    let results;
    let foldersArr;
    try {
      results = await getFolderInfo();
      foldersArr = await results.folder.links;
    } catch (error) {
      console.log(error);
    }

    if (!foldersArr) return;
    setFolders(foldersArr);
  }, []);

  useEffect(() => {
    HandleLoad();
  }, [HandleLoad]);

  return (
    <>
      <HeaderElement></HeaderElement>
      <SharedSection></SharedSection>
      <FolderList items={folders}></FolderList>
      <FooterElement></FooterElement>
    </>
  );
}

export default Shared;
