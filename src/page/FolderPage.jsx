import { useMemo, useState } from "react";
import { useGetLinks } from "../hooks/useGetLinks";

import styles from "./FolderPage.module.css";

import Layout from "../components/Layout/Layout";
import AddLinkInput from "../components/AddLinkInput/AddLinkInput";
import FolderToolBar from "../components/FolderToolBar/FolderToolBar";
import NoLink from "../components/NoLink/NoLink";
import SearchBar from "../components/SearchBar/SearchBar";
import FolderLinks from "../components/FolderLinks/FolderLinks";

const FolderPage = () => {
  const [selectedFolder, setSeletedFolder] = useState("ALL");

  const { data: links, isLoading } = useGetLinks(selectedFolder);

  const cardList = useMemo(() => {
    if (isLoading) return null;
    if (links.length === 0) return <NoLink />;
    return <FolderLinks links={links} editable />;
  }, [isLoading, links]);

  return (
    <>
      <Layout isSticky={false}>
        <div className={styles.input_container}>
          <AddLinkInput />
        </div>
        <div className={styles.wrapper}>
          <SearchBar />
          <FolderToolBar
            onFolderClick={setSeletedFolder}
            selectedFolder={selectedFolder}
          />
          {cardList}
        </div>
      </Layout>
    </>
  );
};

export default FolderPage;
