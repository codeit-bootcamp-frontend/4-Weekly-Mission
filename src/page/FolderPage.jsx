import { useMemo, useState } from "react";
import AddLinkInput from "../components/AddLinkInput/AddLinkInput";
import FolderToolBar from "../components/FolderToolBar/FolderToolBar";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import NoLink from "../components/NoLink/NoLink";
import SearchBar from "../components/SearchBar/SearchBar";
import FolderLinks from "../components/FolderLinks/FolderLinks";
import { useGetLinks } from "../hooks/useGetLinks";

const FolderPage = () => {
  const [selectedFolder, setSeletedFolder] = useState("ALL");

  const { data: links, isLoading } = useGetLinks(selectedFolder);

  const cardList = useMemo(() => {
    if (isLoading) return null;
    if (links.length === 0) return <NoLink />;
    return <FolderLinks links={links} />;
  }, [isLoading, links]);

  return (
    <>
      <NavigationBar isSticky={false} />
      <AddLinkInput />
      <SearchBar />
      <FolderToolBar onFolderClick={setSeletedFolder} />
      {cardList}
      <Footer />
    </>
  );
};

export default FolderPage;
