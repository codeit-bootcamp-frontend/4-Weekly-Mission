import { useMemo, useState } from "react";
import { useGetLinks } from "../hooks/useGetLinks";

import styles from "./FolderPage.module.css";

import Layout from "../components/Layout/Layout";
import AddLinkInput from "../components/AddLinkInput/AddLinkInput";
import FolderToolBar from "../components/FolderToolBar/FolderToolBar";
import NoLink from "../components/NoLink/NoLink";
import SearchBar from "../components/SearchBar/SearchBar";
import FolderLinks from "../components/FolderLinks/FolderLinks";
import DefaultModal from "../components/DefaultModal";

const FolderPage = () => {
  const [selectedFolder, setSeletedFolder] = useState("ALL");
  const [isModalOpen, setModalOpen] = useState(false);

  const { data: links, isLoading } = useGetLinks(selectedFolder);

  const handleAddLink = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const cardList = useMemo(() => {
    if (isLoading) return null;
    if (links.length === 0) return <NoLink />;
    return <FolderLinks links={links} editable />;
  }, [isLoading, links]);

  return (
    <>
      <Layout isSticky={false}>
        {isModalOpen && <DefaultModal setModalOpen={setModalOpen} />}
        <div className={styles.input_container}>
          <AddLinkInput onSubmit={handleAddLink} />
        </div>
        <div className={styles.wrapper}>
          <SearchBar className={styles.searchBar} />
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
