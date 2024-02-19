import { useState } from "react";
import "./FolderCardPage.css";
import folderListData from "./../../components/folderList/folderListData";
import CardList from "../../components/card/CardList";

function FolderCardPage() {
  return (
    <>
      <section className="folderCardPage--section">
        <folderListData />
        <CardList />
      </section>
    </>
  );
}

export default FolderCardPage;
