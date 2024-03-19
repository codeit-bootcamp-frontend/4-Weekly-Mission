import { Footer, CardList } from "../../components";
import { FolderHeader } from "./components";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import FolderMain from "./components/FolderMain";

export default function Folder() {
  return (
    <>
      <FolderHeader />
      <FolderMain />
      <Footer />
    </>
  );
}
